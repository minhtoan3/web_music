// playlist.js

/**
 * Displays a modal with detailed information about a given track.
 * @param {object} track The track object to display info for.
 */
function showTrackInfo(track) {
  const modal = document.querySelector("#track-info-modal");
  const body = modal.querySelector("#track-info-body"); // Select body within the modal for content
  const t = translations[musicLibrary.language];

  if (!track) {
    body.innerHTML = `<p class="empty-message">${t.no_song_playing || "Không có bài hát để hiển thị thông tin."}</p>`;
    modal.classList.add("show");
    return;
  }

  body.innerHTML = `
    <div class="track-info-modal-content">
        <div class="modal-track-cover card-cover"></div>
        <div class="modal-track-details">
            <h3>${escapeHTML(track.title)}</h3>
            <p><strong>${escapeHTML(t.artist)}:</strong> ${escapeHTML(track.artist)}</p>
            <p><strong>${escapeHTML(t.album)}:</strong> ${escapeHTML(track.album || t.unknown_album || 'Unknown Album')}</p>
            <p><strong>${escapeHTML(t.genre)}:</strong> ${escapeHTML(track.genre)}</p>
            <p><strong>${escapeHTML(t.duration)}:</strong> ${formatTime(track.duration)}</p>
        </div>
        <div class="modal-lyrics-container lyrics-container">
            <h4>${escapeHTML(t.lyrics)}</h4>
            <pre class="lyrics">${escapeHTML(track.lyrics || (t.no_lyrics || "Không có lời bài hát."))}</pre>
        </div>
    </div>
  `;
  const coverDiv = body.querySelector(".modal-track-cover");
  loadCoverImage(coverDiv, track.cover);
  modal.classList.add("show");
}

/**
 * Shows a modal for selecting a playlist to add a track to.
 * This function creates a *new* modal element for adding to playlist
 * to avoid conflict with the create playlist modal.
 * @param {object} track The track object to be added.
 */
function showAddToPlaylistModal(track) {
    const modalId = "add-to-playlist-modal";
    let modal = document.getElementById(modalId);
    const t = translations[musicLibrary.language];

    // Create modal if it doesn't exist
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2></h2>
                    <button class="modal-close1" aria-label="${t.cancel_btn || 'Hủy'}"><i class="fas fa-times"></i></button>
                </div>
                <form>
                    <label for="playlist-selector">${t.choose_playlist_label || 'Chọn playlist'}</label>
                    <select id="playlist-selector"></select>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-ghost modal-close">${t.cancel_btn || 'Hủy'}</button>
                        <button type="submit" class="btn btn-primary">${t.add_btn || 'Thêm'}</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        // Attach event listeners for closing the modal
        modal.querySelector('.modal-close1').addEventListener('click', () => modal.classList.remove('show'));
        modal.querySelector('.modal-footer .modal-close').addEventListener('click', () => modal.classList.remove('show'));
        modal.querySelector('.modal-overlay').addEventListener('click', () => modal.classList.remove('show'));
    }

    // Populate modal title
    modal.querySelector('h2').textContent = (t.add_to_playlist_modal_title || 'Thêm "{title}" vào Playlist').replace("{title}", escapeHTML(track.title));

    // Populate playlist options
    const playlistSelector = modal.querySelector("#playlist-selector");
    playlistSelector.innerHTML = ""; // Clear existing options
    if (musicLibrary.playlists.length > 0) {
        musicLibrary.playlists.forEach((p) => {
            const option = document.createElement("option");
            option.value = p.id;
            option.textContent = escapeHTML(p.name);
            playlistSelector.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = t.no_playlists_found || 'Không tìm thấy playlist nào';
        playlistSelector.appendChild(option);
        playlistSelector.disabled = true; // Disable if no playlists
    }

    // Show the modal
    modal.classList.add("show");

    // Handle form submission
    const form = modal.querySelector('form');
    // Remove previous listener to avoid duplicates if modal is reused without full re-creation
    if (form._submitListener) {
        form.removeEventListener('submit', form._submitListener);
    }
    form._submitListener = (e) => {
        e.preventDefault();
        if (!playlistSelector.value) {
            showNotification(t.select_playlist_prompt || "Vui lòng chọn một playlist!", "info");
            return;
        }
        const playlistId = parseInt(playlistSelector.value);
        const playlist = musicLibrary.playlists.find((p) => p.id === playlistId);

        if (playlist) {
            if (!playlist.tracks.some((tItem) => tItem.id === track.id)) { // Check if track already exists in playlist
                playlist.tracks.push(track);
                showNotification(t.notification_added_playlist.replace("{title}", track.title).replace("{playlist}", playlist.name), "success");
                saveHistory(); // Save updated playlist
                renderPlaylists(); // Re-render sidebar playlists to update count/view
            } else {
                showNotification((t.already_in_playlist || 'Bài hát "{title}" đã có trong playlist "{playlist}"!').replace("{title}", track.title).replace("{playlist}", playlist.name), "info");
            }
        }
        modal.classList.remove("show"); // Close modal after action
    };
    form.addEventListener("submit", form._submitListener);

    // If no playlists, disable add button
    const addButton = form.querySelector('.btn-primary');
    if (musicLibrary.playlists.length === 0) {
        addButton.disabled = true;
        addButton.style.opacity = 0.5; // Visual cue
    } else {
        addButton.disabled = false;
        addButton.style.opacity = 1;
    }
}

/**
 * Renders the detailed view of a specific playlist within the library section.
 * @param {object} playlist The playlist object to render.
 */
function renderPlaylistDetailView(playlist) {
    const libraryContent = document.querySelector("#library-section .library-content");
    libraryContent.innerHTML = ""; // Clear existing library content
    
    const t = translations[musicLibrary.language];

    // Add "Back to Library" button
    const backButton = document.createElement('button');
    backButton.className = 'btn btn-ghost back-to-library-btn';
    backButton.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.back_to_library || "Quay lại thư viện"}`;
    backButton.addEventListener('click', () => {
        renderLibrary(); // Re-render general library view
        updateCurrentSectionUI("library-section"); // Ensure library section is active
    });
    libraryContent.appendChild(backButton);

    // Add header for the playlist
    const playlistHeader = document.createElement('div');
    playlistHeader.className = 'playlist-detail-header';
    playlistHeader.innerHTML = `
        <div class="playlist-detail-cover">
            <img src="${escapeHTML(selectedPlaylistCover && playlist.id === musicLibrary.playlists[musicLibrary.playlists.length - 1]?.id ? selectedPlaylistCover : playlist.cover || './images/playlist_default.jpg')}" alt="Playlist Cover">
        </div>
        <div class="playlist-detail-info">
            <p class="playlist-detail-type">${t.playlist_type_label || 'Playlist'}</p>
            <h1>${escapeHTML(playlist.name)}</h1>
            <p class="playlist-detail-description">${escapeHTML(playlist.description || (t.no_description || 'Không có mô tả'))}</p>
            <p class="playlist-detail-tracks-count">${playlist.tracks.length} ${t.tracks_count_label || 'bài hát'}</p>
            <div class="playlist-detail-actions">
                <button class="btn btn-primary playlist-play-all"><i class="fas fa-play"></i> ${t.play_all_btn || 'Phát tất cả'}</button>
                <button class="btn btn-ghost playlist-shuffle-all"><i class="fas fa-random"></i> ${t.shuffle_all_btn || 'Xáo trộn'}</button>
                 <button class="btn btn-danger playlist-delete-detail-btn" aria-label="${t.delete_playlist_btn || 'Xóa playlist'}"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `;
    libraryContent.appendChild(playlistHeader);

    // Attach event listeners for playlist actions
    playlistHeader.querySelector('.playlist-play-all').addEventListener('click', () => {
        musicLibrary.queue = [...playlist.tracks];
        musicLibrary.currentTrackIndex = -1; // Reset index to play from start of new queue
        if (musicLibrary.queue.length > 0) {
            playTrack(musicLibrary.queue[0], 0);
        }
        showNotification((t.playing_playlist || 'Đang phát playlist "{name}"').replace("{name}", playlist.name), "info");
    });

    playlistHeader.querySelector('.playlist-shuffle-all').addEventListener('click', () => {
        musicLibrary.queue = [...playlist.tracks].sort(() => 0.5 - Math.random()); // Shuffle the playlist tracks
        musicLibrary.currentTrackIndex = -1; // Reset index
        if (musicLibrary.queue.length > 0) {
            playTrack(musicLibrary.queue[0], 0);
        }
        showNotification((t.shuffling_playlist || 'Đang xáo trộn playlist "{name}"').replace("{name}", playlist.name), "info");
    });

    // Event listener cho nút xóa playlist trong detail view
    playlistHeader.querySelector(".playlist-delete-detail-btn").addEventListener("click", () => {
      musicLibrary.playlists = musicLibrary.playlists.filter((p) => p.id !== playlist.id);
      saveHistory(); // Save changes
      showNotification(t.notification_deleted_playlist.replace("{name}", playlist.name), "success");
      renderPlaylists(); // Re-render sidebar playlists
      renderLibrary("playlists"); // Quay lại danh sách playlist trong thư viện
    });

    // Render tracks in the playlist
    const trackListDiv = document.createElement('div');
    trackListDiv.className = 'playlist-detail-track-list';
    
    // Show skeleton loading for tracks within the playlist detail view
    showSkeletonLoading(trackListDiv, Math.min(playlist.tracks.length, 5), "queue-item"); // Using queue-item skeleton type

    setTimeout(() => { // Simulate loading time for tracks
        trackListDiv.innerHTML = ""; // Clear skeletons
        if (playlist.tracks.length === 0) {
            trackListDiv.innerHTML = `<p class="empty-message">${t.empty_playlist || 'Playlist này chưa có bài hát nào.'}</p>`;
        } else {
            playlist.tracks.forEach((track, trackIndex) => {
                const trackItem = document.createElement("div");
                trackItem.className = `queue-item ${musicLibrary.currentTrack?.id === track.id ? "playing" : ""}`; // Highlight playing track
                trackItem.dataset.trackId = track.id;
                trackItem.innerHTML = `
                    <div class="queue-cover"><img src="${escapeHTML(track.cover || './images/track_default.jpg')}" alt="Track Cover"></div>
                    <div class="queue-info">
                        <span>${escapeHTML(track.title)}</span>
                        <span>${escapeHTML(track.artist)}</span>
                    </div>
                    <span class="track-duration">${formatTime(track.duration)}</span>
                    <button class="btn-danger remove-from-playlist" data-track-id="${track.id}" data-playlist-id="${playlist.id}" aria-label="${t.remove_from_playlist_btn || 'Xóa khỏi playlist'}"><i class="fas fa-minus-circle"></i></button>
                    <button class="more-options-btn" data-track-id="${track.id}" aria-label="${t.more_options_btn_label || 'Tùy chọn thêm'}"><i class="fas fa-ellipsis-h"></i></button>
                `;
                trackItem.addEventListener("click", (event) => {
                    // Prevent playing if specific buttons are clicked
                    if (!event.target.closest('.remove-from-playlist') && !event.target.closest('.more-options-btn')) {
                        // Play the track when clicking the item in playlist detail
                        playTrack(track, musicLibrary.queue.findIndex(t => t.id === track.id));
                    }
                });
                trackItem.querySelector(".remove-from-playlist").addEventListener("click", (e) => {
                    e.stopPropagation(); // Prevent track item click event
                    // Remove track from playlist
                    playlist.tracks = playlist.tracks.filter(t => t.id !== track.id);
                    saveHistory(); // Save updated playlist
                    showNotification((t.notification_removed_from_playlist || 'Đã xóa "{title}" khỏi playlist "{playlist}"').replace("{title}", track.title).replace("{playlist}", playlist.name), "success");
                    renderPlaylists(); // Re-render sidebar playlists to update count/view
                    renderPlaylistDetailView(playlist); // Refresh the current playlist detail view
                });
                // Thêm event listener cho nút tùy chọn thêm (ellipsis)
                trackItem.querySelector(".more-options-btn").addEventListener("click", (e) => {
                    e.stopPropagation(); // Ngăn sự kiện click của trackItem cha
                    showTrackOptionsModal(track); // Mở modal tùy chọn bài hát
                });
                trackListDiv.appendChild(trackItem);
            });
        }
        libraryContent.appendChild(trackListDiv);
    }, 500); // Simulate loading time
}

/**
 * Renders the list of playlists in the sidebar.
 */
function renderPlaylists() {
  const playlistList = document.querySelector(".playlist-list");
  if (!playlistList) return; // Guard clause

  playlistList.innerHTML = ""; // Clear existing playlists
  const t = translations[musicLibrary.language];

  if (musicLibrary.playlists.length === 0) {
      playlistList.innerHTML = `<p class="empty-message-sidebar">${t.no_playlists_yet || 'Chưa có playlist nào. Hãy tạo cái mới nhé!'}</p>`;
      // Ensure empty-message-sidebar is styled in CSS
      return;
  }

  musicLibrary.playlists.forEach((playlist) => {
    const item = document.createElement("div");
    item.className = "playlist-item";
    item.dataset.playlistId = playlist.id;
    // CẬP NHẬT: Hiển thị ảnh bìa tải lên tạm thời nếu đây là playlist vừa tạo
    item.innerHTML = `
      <div class="playlist-cover"><img src="${escapeHTML(selectedPlaylistCover && playlist.id === musicLibrary.playlists[musicLibrary.playlists.length - 1]?.id ? selectedPlaylistCover : playlist.cover || './images/playlist_default.jpg')}" alt="Playlist Cover"></div>
      <div class="playlist-info">
        <h4>${escapeHTML(playlist.name)}</h4>
        <p>${escapeHTML(playlist.description || (t.playlist_type_label || "Playlist"))}</p>
      </div>`;
    
    // Event listener for clicking the playlist item (to show details or play)
    item.addEventListener("click", (e) => {
        // Luôn hiển thị chi tiết playlist khi click vào playlist item
        renderPlaylistDetailView(playlist);
        updateCurrentSectionUI("library-section"); // Make sure library section is active when showing details
    });

    playlistList.appendChild(item);
  });
}

/**
 * Shows a custom modal with options for the current track.
 * This replaces the context menu for tracks.
 * @param {object} track The track object to show options for.
 */
function showTrackOptionsModal(track) {
    const modal = document.querySelector("#track-options-modal");
    const t = translations[musicLibrary.language];

    if (!modal) {
        console.error("Track options modal element not found!");
        return;
    }

    // Update modal title with track name (or a generic title)
    modal.querySelector('#track-options-modal-title').textContent = (t.track_info_action || "Tùy chọn bài hát") + ` - ${escapeHTML(track.title)}`;

    // Update favorite button in modal
    const toggleFavoriteBtn = modal.querySelector('[data-action="toggle-favorite-from-modal"]');
    const isFavorited = musicLibrary.favorites.some(f => f.id === track.id);
    if (toggleFavoriteBtn) {
        toggleFavoriteBtn.innerHTML = `<i class="fa-${isFavorited ? 'solid' : 'regular'} fa-heart"></i> ${isFavorited ? (t.remove_from_favorites_action || 'Xóa khỏi yêu thích') : (t.add_to_favorites_action || 'Thêm vào yêu thích')}`;
        toggleFavoriteBtn.dataset.trackId = track.id; // Corrected: Use data-track-id
        toggleFavoriteBtn.dataset.itemType = 'track'; // Added: Specify item type
    }

    // Store track ID for other actions in modal
    modal.querySelectorAll('.track-options-list button[data-action]').forEach(btn => {
        if (btn.dataset.action !== 'toggle-favorite-from-modal') { 
            btn.dataset.trackId = track.id; // Corrected: Use data-track-id
            btn.dataset.itemType = 'track'; // Added: Specify item type
        }
    });

    // Show the modal
    modal.classList.add("show");
}