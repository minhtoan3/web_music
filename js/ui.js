// ui.js

/**
 * Displays skeleton loading placeholders in a container.
 * @param {HTMLElement} container The DOM element to add skeletons to.
 * @param {number} count The number of skeleton items to display.
 * @param {string} type The type of skeleton ('card', 'quick-item', 'library-item', 'genre-card').
 */
function showSkeletonLoading(container, count, type = "card") {
  if (!container) return;
  container.innerHTML = ""; // Clear existing content
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement("div");
    let coverClass = "";
    let infoHtml = "";
    let minHeightStyle = "";

    switch (type) {
      case "card":
        skeleton.className = "card skeleton";
        coverClass = "card-cover";
        infoHtml = `
          <div class="card-info">
            <h3 class="skeleton" style="width: 80%; height: 1.5rem; margin-bottom: 0.5rem;"></h3>
            <p class="skeleton" style="width: 60%; height: 1rem;"></p>
          </div>
        `;
        minHeightStyle = 'min-height: 250px;'; // Matching .card min-height
        break;
      case "quick-item":
        skeleton.className = "quick-item skeleton";
        coverClass = "quick-cover";
        infoHtml = `<span class="skeleton" style="width: 70%; height: 1.2rem;"></span>`;
        break;
      case "library-item":
        skeleton.className = "library-item skeleton";
        coverClass = "library-cover";
        infoHtml = `
          <div class="library-info">
            <h3 class="skeleton" style="width: 80%; height: 1.2rem; margin-bottom: 0.25rem;"></h3>
            <p class="skeleton" style="width: 50%; height: 0.9rem;"></p>
          </div>
        `;
        break;
      case "genre-card":
        skeleton.className = "genre-card skeleton";
        coverClass = "genre-image"; // For genre-card, the image placeholder is inside this div
        infoHtml = `<h3 class="skeleton" style="width: 70%; height: 2rem;"></h3>`;
        minHeightStyle = 'height: 200px;'; // Matching .genre-card height
        break;
      case "queue-item": // Added skeleton for queue items in playlist detail
        skeleton.className = "queue-item skeleton";
        coverClass = "queue-cover";
        infoHtml = `
          <div class="queue-info">
            <span class="skeleton" style="width: 70%; height: 1rem; margin-bottom: 0.25rem;"></span>
            <span class="skeleton" style="width: 50%; height: 0.8rem;"></span>
          </div>
          <span class="track-duration skeleton" style="width: 40px; height: 0.8rem;"></span>
        `;
        break;
      default:
        skeleton.className = "card skeleton";
        coverClass = "card-cover";
        infoHtml = `
          <div class="card-info">
            <h3 class="skeleton" style="width: 80%; height: 1.5rem; margin-bottom: 0.5rem;"></h3>
            <p class="skeleton" style="width: 60%; height: 1rem;"></p>
          </div>
        `;
        minHeightStyle = 'min-height: 250px;';
        break;
    }
    
    if (minHeightStyle) {
        skeleton.style.cssText += minHeightStyle; // Append to existing style
    }

    skeleton.innerHTML = `
      <div class="${coverClass} skeleton"></div>
      ${infoHtml}
    `;
    container.appendChild(skeleton);
  }
}

function updatePlayerUI() {
  const track = musicLibrary.currentTrack;
  const t = translations[musicLibrary.language];
  
  const currentTrackCoverEl = document.querySelector(".current-track-cover");
  const currentTrackTitleEl = document.querySelector(".current-track-info h4");
  const currentTrackArtistEl = document.querySelector(".current-track-info p");
  const durationDisplayEl = document.querySelector(".duration");
  const currentTimeDisplayEl = document.querySelector(".current-time");
  const progressFillEl = document.querySelector(".progress-fill");
  const progressHandleEl = document.querySelector(".progress-handle");
  const playPauseBtnIcon = document.querySelector("#play-pause-btn i");
  const favoriteBtn = document.querySelector(".favorite-track-btn");
  const favoriteBtnIcon = favoriteBtn.querySelector("i");

  if (!track) {
      currentTrackCoverEl.innerHTML = '<i class="fas fa-music"></i>';
      currentTrackCoverEl.classList.add("gradient-cover"); // Apply default style
      currentTrackTitleEl.textContent = t.no_song_playing || "Không có bài hát";
      currentTrackArtistEl.textContent = t.select_song_to_play || "Chọn một bài để bắt đầu";
      durationDisplayEl.textContent = "0:00";
      currentTimeDisplayEl.textContent = "0:00";
      if (progressFillEl) progressFillEl.style.width = "0%";
      if (progressHandleEl) progressHandleEl.style.left = "0%";
      if (playPauseBtnIcon) playPauseBtnIcon.className = "fas fa-play";
      if (favoriteBtn) favoriteBtn.classList.remove("active");
      if (favoriteBtnIcon) favoriteBtnIcon.className = "far fa-heart"; // Regular heart
      return;
  }
  
  loadCoverImage(currentTrackCoverEl, track.cover);
  currentTrackTitleEl.textContent = escapeHTML(track.title);
  currentTrackArtistEl.textContent = escapeHTML(track.artist);
  // Only update duration if audio metadata is loaded
  if (audio.duration && !isNaN(audio.duration) && audio.duration !== 0) {
      durationDisplayEl.textContent = formatTime(audio.duration);
  } else {
      // Fallback if audio.duration is not ready yet
      durationDisplayEl.textContent = formatTime(track.duration);
  }
  
  // Update play/pause button icon
  if (playPauseBtnIcon) {
      playPauseBtnIcon.className = musicLibrary.isPlaying ? "fas fa-pause" : "fas fa-play";
  }

  // Update favorite button state for the current track
  const isFavorited = musicLibrary.favorites.some(f => f.id === track.id);
  if (favoriteBtn) {
      favoriteBtn.classList.toggle("active", isFavorited);
  }
  if (favoriteBtnIcon) {
      favoriteBtnIcon.className = `fa-${isFavorited ? "solid" : "regular"} fa-heart`; // Solid heart if favorited
  }

  renderQueue(); // Re-render queue to highlight playing track
}

function renderHome() {
  const quickGrid = document.querySelector(".quick-access .quick-grid");
  const recommendedGrid = document.querySelector(".recommended-section .cards-grid");
  const chartGrid = document.querySelector(".chart-section .cards-grid");

  if (!quickGrid || !recommendedGrid || !chartGrid) return; // Guard clause

  showSkeletonLoading(quickGrid, 3, "quick-item");
  showSkeletonLoading(recommendedGrid, 6);
  showSkeletonLoading(chartGrid, 6);

  setTimeout(() => { // Simulate API fetch or heavy rendering
    quickGrid.innerHTML = "";
    // Get up to 3 most recent unique tracks from history
    const uniqueHistory = [...new Map(musicLibrary.history.map(item => [item.id, item])).values()];
    const recentTracks = uniqueHistory.slice(-3).reverse(); 

    if (recentTracks.length === 0) {
        quickGrid.innerHTML = `<p class="empty-message">${translations[musicLibrary.language].no_tracks_to_display || "Chưa có bài hát nào được phát gần đây."}</p>`;
    } else {
        recentTracks.forEach((track) => {
          const quickItem = document.createElement("div");
          quickItem.className = "quick-item";
          quickItem.dataset.trackId = track.id;
          quickItem.innerHTML = `
            <div class="quick-cover"></div>
            <span>${escapeHTML(track.title)}</span>
            <div class="play-overlay"><i class="fas fa-play"></i></div>
            <button class="more-btn" data-track-id="${track.id}" aria-label="${translations[musicLibrary.language].more_options_btn_label || 'Tùy chọn khác'}"><i class="fas fa-ellipsis-h"></i></button>
          `;
          quickItem.addEventListener("click", (e) => {
            // Chỉ show details nếu không nhấp vào play-overlay hoặc more-btn
            if (!e.target.closest('.play-overlay') && !e.target.closest('.more-btn')) {
                showNowPlayingDetails(track); 
            }
          });
          quickItem.querySelector(".play-overlay").addEventListener("click", (e) => {
              e.stopPropagation(); // Ngăn sự kiện click của quickItem cha
              playTrack(track); // Phát bài hát trực tiếp
          });
          // Thêm event listener cho nút more-btn
          quickItem.querySelector(".more-btn").addEventListener("click", (e) => {
              e.stopPropagation(); // Ngăn sự kiện click của quickItem cha
              showTrackOptionsModal(track); // Mở modal tùy chọn bài hát
          });
          loadCoverImage(quickItem.querySelector(".quick-cover"), track.cover || './images/track_default.jpg');
          quickGrid.appendChild(quickItem);
        });
    }

    recommendedGrid.innerHTML = "";
    // Filter out recent tracks from recommended tracks to avoid redundancy
    const recentTrackIds = new Set(recentTracks.map(t => t.id));
    const homeRecommendedTracks = musicLibrary.tracks.filter(t => !recentTrackIds.has(t.id)).slice(0, 6); // Get up to 6 unique recommended

    if (homeRecommendedTracks.length === 0) {
        recommendedGrid.innerHTML = `<p class="empty-message">${translations[musicLibrary.language].no_tracks_to_display || "Không có bài hát đề xuất."}</p>`;
    } else {
        homeRecommendedTracks.forEach((track) => {
          const card = createTrackCard(track); // Use helper to create track card
          recommendedGrid.appendChild(card);
        });
    }

    chartGrid.innerHTML = "";
    // Filter out recent and recommended tracks from chart tracks
    const recommendedTrackIds = new Set(homeRecommendedTracks.map(t => t.id));
    const homeChartTracks = musicLibrary.tracks.filter(t => !recentTrackIds.has(t.id) && !recommendedTrackIds.has(t.id)).slice(0, 6); // Get up to 6 unique chart tracks

    if (homeChartTracks.length === 0) {
        chartGrid.innerHTML = `<p class="empty-message">${translations[musicLibrary.language].no_tracks_to_display || "Không có bài hát trong bảng xếp hạng."}</p>`;
    } else {
        homeChartTracks.forEach((track) => {
          const card = createTrackCard(track); // Use helper to create track card
          chartGrid.appendChild(card);
        });
    }
  }, 1000); // Simulate loading time
}

/**
 * Helper function to create a track card element.
 * @param {object} track The track object.
 * @returns {HTMLElement} The created card element.
 */
function createTrackCard(track) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.trackId = track.id;
    card.innerHTML = `
      <div class="card-cover"></div>
      <div class="card-info">
        <h3>${escapeHTML(track.title)}</h3>
        <p>${escapeHTML(track.artist)}</p>
      </div>
      <div class="play-overlay"><i class="fas fa-play"></i></div>
      <button class="more-btn" data-track-id="${track.id}" aria-label="${translations[musicLibrary.language].more_options_btn_label || 'Tùy chọn khác'}"><i class="fas fa-ellipsis-h"></i></button>
    `;
    card.addEventListener("click", (e) => {
      // Khi click vào card, hiển thị chi tiết bài hát nếu không phải là play-overlay hoặc more-btn
      if (!e.target.closest('.play-overlay') && !e.target.closest('.more-btn')) {
          showNowPlayingDetails(track); 
      }
    });
    card.querySelector(".play-overlay").addEventListener("click", (e) => {
        e.stopPropagation();
        playTrack(track);
    });
    // Thêm event listener cho nút more-btn
    card.querySelector(".more-btn").addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn sự kiện click của card cha
        showTrackOptionsModal(track); // Mở modal tùy chọn bài hát
    });
    loadCoverImage(card.querySelector(".card-cover"), track.cover || './images/track_default.jpg');
    return card;
}


/**
 * Renders the Library section, optionally filtered by type or specific value.
 * @param {string} [filter="all"] The type of items to filter by ('all', 'playlists', 'artists', 'albums', 'genres').
 * @param {string|number|null} [specificValue=null] A specific value to filter within a type (e.g., genre name, artist name).
 */
// ui.js

function renderLibrary(filter = "all", specificValue = null) {
  const libraryContent = document.querySelector(".library-content");
  if (!libraryContent) return;

  showSkeletonLoading(libraryContent, 5, "library-item");
  setTimeout(() => {
    libraryContent.innerHTML = "";
   
    const t = translations[musicLibrary.language];

    if (specificValue || filter !== "all") {
        const backButton = document.createElement('button');
        backButton.className = 'btn btn-ghost back-to-library-btn';
        backButton.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.back_to_library_all || "Quay lại thư viện"}`;
        backButton.addEventListener('click', () => {
            renderLibrary("all");
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            document.querySelector(`.filter-btn[data-filter="all"]`).classList.add("active");
            updateCurrentSectionUI("library-section");
        });
        libraryContent.appendChild(backButton);
    }

    let itemsToRender = [];
    let sectionTitle = "";
    let isDetailedView = false;

    if (specificValue) {
        isDetailedView = true;
        let filteredTracks = [];
        let headerHtml = '';
        switch (filter) {
            case "artists":
                filteredTracks = musicLibrary.tracks.filter(t => t.artist === specificValue);
                // SỬ DỤNG artistCover MỚI
                const artistInfoTrackForCover = musicLibrary.tracks.find(t => t.artist === specificValue && t.artistCover); // Tìm track có artistCover
                const artistCoverUrl = artistInfoTrackForCover ? artistInfoTrackForCover.artistCover : './images/artist_default.jpg';
                headerHtml = `
                    <div class="library-artist-header">
                        <div class="library-cover round-cover"></div>
                        <div class="library-info">
                            <p class="playlist-detail-type">${t.artist || 'Nghệ sĩ'}</p>
                            <h2>${escapeHTML(specificValue)}</h2>
                            <p>${filteredTracks.length} ${t.tracks_count_label || 'bài hát'}</p>
                        </div>
                    </div>
                `;
                libraryContent.appendChild(document.createRange().createContextualFragment(headerHtml));
                loadCoverImage(libraryContent.querySelector('.library-artist-header .library-cover'), artistCoverUrl);
                sectionTitle = specificValue;
                break;
            case "albums":
                filteredTracks = musicLibrary.tracks.filter(t => t.album === specificValue);
                const albumTrackForCover = musicLibrary.tracks.find(t => t.album === specificValue && t.cover);
                const albumArtist = filteredTracks.length > 0 ? escapeHTML(filteredTracks[0].artist) : (t.unknown_artist || 'Unknown Artist');
                const albumYear = filteredTracks.length > 0 ? escapeHTML(filteredTracks[0].year) : 'N/A';
                headerHtml = `
                    <div class="library-album-header">
                        <div class="album-header-cover card-cover"></div>
                        <div class="album-header-info">
                            <p class="playlist-detail-type">${t.album || 'Album'}</p>
                            <h2>${escapeHTML(specificValue)}</h2>
                            <p>${albumArtist} • ${albumYear} • ${filteredTracks.length} ${t.tracks_count_label || 'bài hát'}</p>
                        </div>
                    </div>
                `;
                libraryContent.appendChild(document.createRange().createContextualFragment(headerHtml));
                loadCoverImage(libraryContent.querySelector('.library-album-header .album-header-cover'), albumTrackForCover ? albumTrackForCover.cover : './images/track_default.jpg');
                sectionTitle = specificValue;
                break;
            case "genres":
                filteredTracks = musicLibrary.tracks.filter(t => t.genre === specificValue);
                headerHtml = `
                    <div class="library-genre-header playlist-detail-header">
                        <div class="playlist-detail-info">
                            <p class="playlist-detail-type">${t.genre || 'Thể loại'}</p>
                            <h1>${escapeHTML(specificValue)}</h1>
                            <p>${filteredTracks.length} ${t.tracks_count_label || 'bài hát'}</p>
                        </div>
                    </div>
                `;
                libraryContent.appendChild(document.createRange().createContextualFragment(headerHtml));
                sectionTitle = specificValue;
                break;
        }
        
        if (filteredTracks.length === 0) {
            const emptyMessageDiv = document.createElement('div');
            emptyMessageDiv.innerHTML = `<p class="empty-message">${t.no_tracks_to_display || "Không có bài hát nào để hiển thị."}</p>`;
            libraryContent.appendChild(emptyMessageDiv);
        } else {
            const tempContainer = document.createElement('div');
            tempContainer.className = 'cards-grid';
            libraryContent.appendChild(tempContainer);
            showSkeletonLoading(tempContainer, Math.min(filteredTracks.length, 6));

            setTimeout(() => {
                tempContainer.innerHTML = '';
                filteredTracks.forEach(track => {
                    const card = createTrackCard(track);
                    tempContainer.appendChild(card);
                });
            }, 500);
        }
        return;
    }

    if (filter === "all") {
      itemsToRender = [
        ...musicLibrary.playlists.map((p) => ({ ...p, type: "playlist" })),
        // THAY ĐỔI DÒNG NÀY: Lấy ảnh artistCover từ track
        ...[...new Set(musicLibrary.tracks.map((t) => t.artist))].map((artistName) => {
            const trackWithArtistCover = musicLibrary.tracks.find(t => t.artist === artistName && t.artistCover);
            return { name: artistName, type: "artist", cover: trackWithArtistCover ? trackWithArtistCover.artistCover : './images/artist_default.jpg' };
        }),
        ...[...new Set(musicLibrary.tracks.map((t) => t.album))].map((album) => {
            const trackWithAlbumCover = musicLibrary.tracks.find(t => t.album === album && t.cover);
            return { name: album, type: "album", cover: trackWithAlbumCover ? trackWithAlbumCover.cover : './images/track_default.jpg' };
        }),
        ...[...new Set(musicLibrary.tracks.map((t) => t.genre))].map((genre) => ({ name: genre, type: "genre", cover: './images/genre_default.jpg' }))
      ].sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
    } else if (filter === "playlists") {
      itemsToRender = musicLibrary.playlists.map((p) => ({ ...p, type: "playlist" }));
    } else if (filter === "artists") {
      // THAY ĐỔI DÒNG NÀY: Lấy ảnh artistCover khi lọc riêng
      itemsToRender = [...new Set(musicLibrary.tracks.map((t) => t.artist))].map((artistName) => {
            const trackWithArtistCover = musicLibrary.tracks.find(t => t.artist === artistName && t.artistCover);
            return { name: artistName, type: "artist", cover: trackWithArtistCover ? trackWithArtistCover.artistCover : './images/artist_default.jpg' };
        });
    } else if (filter === "albums") {
      itemsToRender = [...new Set(musicLibrary.tracks.map((t) => t.album))].map((album) => {
            const trackWithAlbumCover = musicLibrary.tracks.find(t => t.album === album && t.cover);
            return { name: album, type: "album", cover: trackWithAlbumCover ? trackWithAlbumCover.cover : './images/album_default.jpg' };
        });
    } else if (filter === "genres") {
      itemsToRender = [...new Set(musicLibrary.tracks.map((t) => t.genre))].map((genre) => ({ name: genre, type: "genre", cover: './images/genre_default.jpg' }));
    }

    if (itemsToRender.length === 0 && !isDetailedView) {
        libraryContent.innerHTML = `<p class="empty-message">${t.no_tracks_to_display || "Không có mục nào để hiển thị."}</p>`;
        return;
    }

    itemsToRender.forEach((item) => {
      const libraryItem = document.createElement("div");
      libraryItem.className = "library-item";
      libraryItem.dataset.id = item.id || item.name;
      libraryItem.dataset.type = item.type;
      libraryItem.innerHTML = `
        <div class="library-cover ${item.type === "artist" ? "round-cover" : ""}"></div>
        <div class="library-info">
          <h3>${escapeHTML(item.name || item.title)}</h3>
          <p>${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
        </div>
        ${item.type === "track" || item.type === "playlist" ? '<div class="play-overlay"><i class="fas fa-play"></i></div>' : ''}
        ${item.type === "track" ? `<button class="more-btn" data-track-id="${item.id}" aria-label="${translations[musicLibrary.language].more_options_btn_label || 'Tùy chọn khác'}"><i class="fas fa-ellipsis-h"></i></button>` : ''}
      `;
      // Sử dụng loadCoverImage với đường dẫn ảnh cover của item thư viện
      loadCoverImage(libraryItem.querySelector(".library-cover"), item.cover || `./images/${item.type}_default.jpg`);

      libraryItem.addEventListener("click", (e) => {
          if (e.target.closest('.play-overlay') || e.target.closest('.more-btn')) {
              return;
          }
          if (item.type === "track") {
            showNowPlayingDetails(item);
          } else if (item.type === "playlist") {
            renderPlaylistDetailView(item);
            updateCurrentSectionUI("library-section");
          } else if (item.type === "artist") {
              renderLibrary("artists", item.name);
          } else if (item.type === "album") {
              renderLibrary("albums", item.name);
          } else if (item.type === "genre") {
              renderLibrary("genres", item.name);
          }
      });
      if (item.type === "track" || item.type === "playlist") {
          libraryItem.querySelector(".play-overlay").addEventListener("click", (e) => {
              e.stopPropagation();
              if (item.type === "track") {
                  playTrack(item);
              } else if (item.type === "playlist") {
                  musicLibrary.queue = [...item.tracks];
                  musicLibrary.currentTrackIndex = -1;
                  if (musicLibrary.queue.length > 0) {
                      playTrack(musicLibrary.queue[0], 0);
                  }
                  showNotification((t.playing_playlist || 'Đang phát playlist "{name}"').replace('{name}', item.name), "info");
              }
          });
      }
      if (item.type === "track") {
          libraryItem.querySelector(".more-btn").addEventListener("click", (e) => {
              e.stopPropagation();
              showTrackOptionsModal(item);
          });
      }
      
      libraryContent.appendChild(libraryItem);
    });
  }, 1000);
}

/**
 * Renders the Favorites section with a grid of favorite tracks.
 */
function renderFavorites() {
  const favoritesSectionGrid = document.querySelector("#favorites-section .cards-grid");
  if (!favoritesSectionGrid) return;

  showSkeletonLoading(favoritesSectionGrid, 3); // Show skeleton
  setTimeout(() => { // Simulate loading time
    favoritesSectionGrid.innerHTML = "";
    if (musicLibrary.favorites.length === 0) {
        favoritesSectionGrid.innerHTML = `<p class="empty-message">${translations[musicLibrary.language].no_favorites_yet || 'Bạn chưa có bài hát yêu thích nào. Hãy thêm vào nhé!'}</p>`;
        return;
    }
    musicLibrary.favorites.forEach((track) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.trackId = track.id;
      card.innerHTML = `
        <div class="card-cover"></div>
        <div class="card-info">
          <h3>${escapeHTML(track.title)}</h3>
          <p>${escapeHTML(track.artist)}</p>
        </div>
        <div class="play-overlay"><i class="fas fa-play"></i></div>
        <button class="more-btn" data-track-id="${track.id}" aria-label="${translations[musicLibrary.language].more_options_btn_label || 'Tùy chọn khác'}"><i class="fas fa-ellipsis-h"></i></button>
      `;
      card.addEventListener("click", (e) => {
    // Prevent showing details if specific buttons are clicked
        if (!e.target.closest('.play-overlay') && !e.target.closest('.more-btn')) { // THAY ĐỔI: Không kiểm tra .favorite-delete nữa
          showNowPlayingDetails(track); // Show track details
        }
      });
      card.querySelector(".play-overlay").addEventListener("click", (e) => {
          e.stopPropagation();
          playTrack(track);
      });
      // Thêm event listener cho nút more-btn
      card.querySelector(".more-btn").addEventListener("click", (e) => {
          e.stopPropagation(); // Ngăn sự kiện click của card cha
          showTrackOptionsModal(track); // Mở modal tùy chọn bài hát
      });
      loadCoverImage(card.querySelector(".card-cover"), track.cover || './images/track_default.jpg');
      favoritesSectionGrid.appendChild(card);
    });
  }, 1000);
}

/**
 * Renders the music queue in all designated queue lists (e.g., player sidebar, modal).
 * Supports drag-and-drop reordering.
 */
function renderQueue() {
  const queueLists = document.querySelectorAll(".queue-list");
  let draggedItemIndex = null; // Đổi tên để làm rõ nó là một chỉ mục

  const t = translations[musicLibrary.language];

  queueLists.forEach((list) => {
    list.innerHTML = ""; // Xóa các mục hàng đợi hiện có
    if (musicLibrary.queue.length === 0) {
        list.innerHTML = `<p class="empty-message">${t.empty_queue || 'Hàng đợi trống. Thêm bài hát vào đây nhé!'}</p>`;
        // If it's the modal queue, also add a hint message
        if (list.closest('#queue-modal')) {
            list.innerHTML += `<p class="empty-message-hint">${t.empty_queue_hint || 'Bạn có thể thêm bài hát từ trang chủ hoặc thư viện.'}</p>`;
        }
        return;
    }

    musicLibrary.queue.forEach((track, index) => {
      const item = document.createElement("div");
      item.className = `queue-item ${musicLibrary.currentTrack?.id === track.id ? "playing" : ""}`;
      item.draggable = true;
      item.dataset.trackId = track.id;
      item.dataset.index = index; // Lưu chỉ mục gốc để kéo và thả
      item.innerHTML = `
  <div class="queue-cover"></div>
  <div class="queue-info">
    <span>${escapeHTML(track.title)}</span>
    <span>${escapeHTML(track.artist)}</span>
  </div>
  <span class="track-duration">${formatTime(track.duration)}</span>
  <button class="remove-from-queue-btn" data-track-id="${track.id}" data-index="${index}" aria-label="${t.remove_from_queue_btn || 'Xóa khỏi hàng đợi'}"><i class="fas fa-minus-circle"></i></button>
`;
loadCoverImage(item.querySelector(".queue-cover"), track.cover || './images/track_default.jpg'); // Dòng này được thêm vào sau item.innerHTML // ĐÃ SỬA ĐỔI: Thay thế nút "more-options-btn" bằng "remove-from-queue-btn" với biểu tượng dấu trừ.
      item.addEventListener("click", (e) => {
        // Khi nhấp vào mục hàng đợi, phát nhạc nếu không phải nút tùy chọn
        if (!e.target.closest('.remove-from-queue-btn')) { // ĐÃ SỬA ĐỔI: Kiểm tra lớp nút mới ".remove-from-queue-btn"
            playTrack(track, index);
        }
      });

      // Drag and Drop listeners
      item.addEventListener("dragstart", (e) => {
        draggedItemIndex = index;
        e.dataTransfer.setData("text/plain", index); // Dữ liệu để chuyển (chỉ mục của mục được kéo)
        item.classList.add('dragging'); // Thêm lớp kéo để phản hồi trực quan
      });

      item.addEventListener("dragover", (e) => {
          e.preventDefault(); // Cho phép thả
          const bounding = item.getBoundingClientRect();
          const offset = e.clientY - bounding.top;
          // Phản hồi trực quan cho vị trí thả
          if (offset > bounding.height / 2) {
              item.style.borderBottom = '2px solid #1db954';
              item.style.borderTop = 'none';
          } else {
              item.style.borderTop = '2px solid #1db954';
              item.style.borderBottom = 'none';
          }
      });

      item.addEventListener("dragleave", () => {
          item.style.borderTop = 'none';
          item.style.borderBottom = 'none';
      });

      item.addEventListener("drop", (e) => {
        e.preventDefault();
        item.style.borderTop = 'none'; // Xóa kiểu kéo qua
        item.style.borderBottom = 'none';

        const targetIndex = parseInt(item.dataset.index); // Lấy chỉ mục gốc của mục đích
        if (draggedItemIndex !== null && draggedItemIndex !== targetIndex) {
          const [movedTrack] = musicLibrary.queue.splice(draggedItemIndex, 1);
          // Chèn vào targetIndex. Nếu thả bên dưới mục hiện tại, targetIndex có thể cần điều chỉnh
          let insertIndex = targetIndex;
          if (draggedItemIndex < targetIndex) {
              // Nếu kéo xuống, và mục đích nằm sau vị trí ban đầu, chèn trước mục đích để đặt nó *sau* mục đích trực quan
              insertIndex = targetIndex; // Mặc định là đúng
          } else {
              insertIndex = targetIndex;
          }
          musicLibrary.queue.splice(insertIndex, 0, movedTrack);

          // Điều chỉnh currentTrackIndex nếu bài hát đang phát được di chuyển
          if (musicLibrary.currentTrack && musicLibrary.currentTrack.id === movedTrack.id) {
              // Nếu mục được kéo là bài hát hiện tại
              musicLibrary.currentTrackIndex = musicLibrary.queue.indexOf(movedTrack); // Tìm vị trí mới của nó
          } else if (musicLibrary.currentTrack) {
              // Nếu bài hát hiện tại KHÔNG phải là mục được kéo, nhưng chỉ mục của nó bị ảnh hưởng
              const oldCurrentTrackIndex = musicLibrary.currentTrackIndex;
              if (draggedItemIndex < oldCurrentTrackIndex && insertIndex >= oldCurrentTrackIndex) {
                  musicLibrary.currentTrackIndex--;
              } else if (draggedItemIndex > oldCurrentTrackIndex && insertIndex <= oldCurrentTrackIndex) {
                  musicLibrary.currentTrackIndex++;
              }
          }
          saveHistory(); // Lưu thứ tự hàng đợi mới
          renderQueue(); // Hiển thị lại toàn bộ hàng đợi để phản ánh thứ tự mới
        }
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        draggedItemIndex = null; // Đặt lại chỉ mục mục được kéo
        // Xóa mọi kiểu kéo còn lại từ tất cả các mục
        document.querySelectorAll('.queue-item').forEach(qi => {
            qi.style.borderTop = 'none';
            qi.style.borderBottom = 'none';
        });
      });

      // ĐÃ THÊM: Trình lắng nghe sự kiện cho nút xóa mới
      item.querySelector(".remove-from-queue-btn").addEventListener("click", (e) => {
          e.stopPropagation(); // Ngăn sự kiện nhấp vào mục theo dõi
          removeTrackFromQueue(track.id, index); // Gọi một hàm mới để xử lý việc xóa
      });

      list.appendChild(item);
    });
  });
}

// HÀM MỚI: Để xử lý việc xóa một bài hát khỏi hàng đợi
function removeTrackFromQueue(trackIdToRemove, originalIndex) {
    const t = translations[musicLibrary.language];
    const removedTrack = musicLibrary.queue.splice(originalIndex, 1)[0]; // Xóa theo chỉ mục gốc

    if (removedTrack) {
        // Điều chỉnh currentTrackIndex nếu bài hát bị xóa đứng trước hoặc là bài hát hiện tại
        if (musicLibrary.currentTrack && musicLibrary.currentTrack.id === trackIdToRemove) {
            // Nếu bài hát đang phát hiện tại bị xóa, tạm dừng và đặt lại giao diện người dùng trình phát
            audio.pause();
            musicLibrary.isPlaying = false;
            musicLibrary.currentTrack = null;
            musicLibrary.currentTrackIndex = -1;
            updatePlayerUI();
        } else if (musicLibrary.currentTrack && originalIndex < musicLibrary.currentTrackIndex) {
            // Nếu một bài hát trước bài hiện tại bị xóa, giảm currentTrackIndex
            musicLibrary.currentTrackIndex--;
        } else if (musicLibrary.currentTrack && originalIndex === musicLibrary.currentTrackIndex) {
        }

        saveHistory(); // Lưu hàng đợi đã cập nhật
        renderQueue(); // Hiển thị lại hàng đợi để phản ánh việc xóa
        showNotification((t.notification_removed_queue || 'Đã xóa "{title}" khỏi hàng đợi').replace("{title}", removedTrack.title), "success");
    }
}


/**
 * Updates the UI elements related to language translations.
 */
function updateLanguageUI() {
  const t = translations[musicLibrary.language];

  // Update navigation buttons and sidebar items
  document.querySelector('.nav-btn[data-section="home"]').innerHTML = `<i class="fas fa-home"></i> ${t.home}`;
  document.querySelector('.nav-btn[data-section="search"]').innerHTML = `<i class="fas fa-search"></i> ${t.search}`;
  document.querySelector('.nav-btn[data-section="library"]').innerHTML = `<i class="fas fa-book"></i> ${t.library}`;
  document.querySelector('.nav-item[data-section="home"]').innerHTML = `<i class="fas fa-home"></i> ${t.home}`;
  document.querySelector('.nav-item[data-section="search"]').innerHTML = `<i class="fas fa-search"></i> ${t.search}`;
  document.querySelector('.nav-item[data-section="library"]').innerHTML = `<i class="fas fa-book"></i> ${t.library}`;
  document.querySelector('.nav-item[data-modal="create-playlist-modal"]').innerHTML = `<i class="fas fa-plus-square"></i> ${t.create_playlist}`;
  document.querySelector('.nav-item[data-section="favorites"]').innerHTML = `<i class="fas fa-heart"></i> ${t.favorites}`;
  document.querySelector('.nav-item[data-section="queue"]').innerHTML = `<i class="fas fa-list-ul"></i> ${t.queue}`;

  // Update Section Titles based on section ID (if available in translations)
  document.querySelectorAll('.section .section-title').forEach(titleEl => {
      const parentSection = titleEl.closest('.section');
      if (parentSection) {
          const sectionKey = parentSection.id.replace('-section', ''); // e.g., 'home', 'search'
          if (t[sectionKey]) {
              titleEl.textContent = t[sectionKey];
          }
      }
  });

  // Specific titles for "Nghe gần đây", "Được tạo riêng cho bạn" and "Bảng xếp hạng V-Pop"
  // Assuming these titles have specific classes or are the first/second/third within #home-section
  const homeSectionTitles = document.querySelectorAll('#home-section .section-header .section-title');
  const homeShowAllBtns = document.querySelectorAll('#home-section .section-header .show-all-btn');

  if (homeSectionTitles[0]) homeSectionTitles[0].textContent = t.recent_list_title || "Nghe gần đây";
  if (homeShowAllBtns[0]) homeShowAllBtns[0].textContent = t.show_all || "Hiện tất cả"; 

  if (homeSectionTitles[1]) homeSectionTitles[1].textContent = t.recommended_list_title || "Được tạo riêng cho bạn";
  if (homeShowAllBtns[1]) homeShowAllBtns[1].textContent = t.show_all || "Hiện tất cả"; 

  if (homeSectionTitles[2]) homeSectionTitles[2].textContent = t.chart_list_title || "Bảng xếp hạng V-Pop";
  if (homeShowAllBtns[2]) homeShowAllBtns[2].textContent = t.show_all || "Hiện tất cả"; 

  // Update button texts for filter in Library
  document.querySelector('.filter-btn[data-filter="all"]').textContent = t.filter_all || "Tất cả";
  document.querySelector('.filter-btn[data-filter="playlists"]').textContent = t.filter_playlists || "Playlist";
  document.querySelector('.filter-btn[data-filter="artists"]').textContent = t.filter_artists || "Ca sĩ";
  document.querySelector('.filter-btn[data-filter="albums"]').textContent = t.filter_albums || "Album";
  document.querySelector('.filter-btn[data-filter="genres"]').textContent = t.filter_genres || "Thể loại";

  // Update modal titles
  if (document.querySelector("#login-modal h2")) document.querySelector("#login-modal h2").textContent = t.login_title || "Đăng nhập";
  if (document.querySelector("#register-modal h2")) document.querySelector("#register-modal h2").textContent = t.register_title || "Đăng ký";
  if (document.querySelector("#create-playlist-modal h2")) document.querySelector("#create-playlist-modal h2").textContent = t.create_playlist;
  if (document.querySelector("#queue-modal h2")) document.querySelector("#queue-modal h2").textContent = t.queue;
  if (document.querySelector("#notification-modal h2")) document.querySelector("#notification-modal h2").textContent = t.notifications_title || "Thông báo";
  if (document.querySelector("#track-info-modal h2")) document.querySelector("#track-info-modal h2").textContent = t.track_info;
  // If "add-to-playlist-modal" exists, update its title dynamically when opened via showAddToPlaylistModal

  // Update input placeholders and other fixed texts in modals
  if (document.querySelector("#login-email")) document.querySelector("#login-email").placeholder = t.email_placeholder || "Nhập email của bạn";
  if (document.querySelector("#login-password")) document.querySelector("#login-password").placeholder = t.password_placeholder || "Nhập mật khẩu";
  if (document.querySelector("#register-email")) document.querySelector("#register-email").placeholder = t.email_placeholder || "Nhập email của bạn";
  if (document.querySelector("#register-password")) document.querySelector("#register-password").placeholder = t.password_placeholder || "Nhập mật khẩu";
  if (document.querySelector("#register-name")) document.querySelector("#register-name").placeholder = t.name_placeholder || "Nhập tên của bạn";
  // Check if elements exist before accessing nextSibling or textContent
  const rememberMeLabel = document.querySelector("#remember-me")?.nextSibling;
  if (rememberMeLabel && rememberMeLabel.nodeType === Node.TEXT_NODE) rememberMeLabel.textContent = " " + (t.remember_me || "Ghi nhớ tôi");
  
  if (document.querySelector(".forgot-password")) document.querySelector(".forgot-password").textContent = t.forgot_password || "Quên mật khẩu?";
  if (document.querySelector("#login-modal .btn-primary")) document.querySelector("#login-modal .btn-primary").textContent = t.login_btn || "Đăng nhập";
  if (document.querySelector("#register-modal .btn-primary")) document.querySelector("#register-modal .btn-primary").textContent = t.register_btn || "Đăng ký";
  if (document.querySelector(".btn-social.google")) document.querySelector(".btn-social.google").innerHTML = `<i class="fab fa-google"></i> ${t.login_with_google || "Đăng nhập với Google"}`;
  if (document.querySelector(".btn-social.facebook")) document.querySelector(".btn-social.facebook").innerHTML = `<i class="fab fa-facebook"></i> ${t.login_with_facebook || "Đăng nhập với Facebook"}`;
  
  // Ensure links for modal switching are updated
  const registerModalLink = document.querySelector(".modal-footer-text a[data-modal='register-modal']");
  if (registerModalLink) registerModalLink.textContent = t.register_link || "Đăng ký";
  const loginModalLink = document.querySelector(".modal-footer-text a[data-modal='login-modal']");
  if (loginModalLink) loginModalLink.textContent = t.login_link || "Đăng nhập";
  
  if (document.querySelector("#playlist-name")) document.querySelector("#playlist-name").placeholder = t.playlist_name_placeholder || "Nhập tên playlist";
  if (document.querySelector("#playlist-description")) document.querySelector("#playlist-description").placeholder = t.playlist_description_placeholder || "Mô tả playlist của bạn";
  if (document.querySelector(".choose-photo-btn")) document.querySelector(".choose-photo-btn").innerHTML = `<i class="fas fa-camera"></i> ${t.choose_photo_btn || "Chọn ảnh"}`;
  if (document.querySelector("#create-playlist-modal .modal-footer .btn-ghost")) document.querySelector("#create-playlist-modal .modal-footer .btn-ghost").textContent = t.cancel_btn || "Hủy";
  if (document.querySelector("#create-playlist-modal .modal-footer .btn-primary")) document.querySelector("#create-playlist-modal .modal-footer .btn-primary").textContent = t.create_btn || "Tạo";
  if (document.querySelector("#track-info-modal #track-info-body h4")) document.querySelector("#track-info-modal #track-info-body h4").textContent = t.lyrics;


  // Update Now Playing section translations
  if (document.querySelector(".now-playing-type")) document.querySelector(".now-playing-type").textContent = t.now_playing;
  if (document.querySelector(".back-to-home-btn")) document.querySelector(".back-to-home-btn").innerHTML = `<i class="fas fa-arrow-left"></i> ${t.back}`;
  if (document.querySelector("#now-playing-play-btn")) document.querySelector("#now-playing-play-btn").innerHTML = `<i class="fas fa-play"></i> ${t.play_btn || 'Phát'}`;
  // Favorite button text for now playing is dynamic, just ensure its icon is correct via updatePlayerUI
  if (document.querySelector("#now-playing-favorite-btn")) {
    // Only update text, icon class is handled by updatePlayerUI
    document.querySelector("#now-playing-favorite-btn").lastChild.textContent = ` ${t.favorite_btn || 'Yêu thích'}`;
  }
  if (document.querySelector(".lyrics-card h3")) document.querySelector(".lyrics-card h3").textContent = t.lyrics;
  if (document.querySelector(".artist-info-card h3")) document.querySelector(".artist-info-card h3").textContent = t.about_artist;
  if (document.querySelector(".related-tracks-section .section-title")) document.querySelector(".related-tracks-section .section-title").textContent = t.related_tracks;
  if (document.querySelector(".show-full-lyrics-btn")) {
      document.querySelector(".show-full-lyrics-btn").textContent = document.querySelector(".lyrics-content").classList.contains("expanded") ? (t.collapse_lyrics || "Thu gọn") : (t.show_more_lyrics || "Hiện thêm");
  }
  // Update new track options modal elements
  const trackOptionsModal = document.querySelector('#track-options-modal');
  if (trackOptionsModal) {
      trackOptionsModal.querySelector('#track-options-modal-title').textContent = (t.track_info_action || "Tùy chọn bài hát"); // Using track_info_action as a generic title
      trackOptionsModal.querySelector('[data-action="play-track-from-modal"]').innerHTML = `<i class="fas fa-play"></i> ${t.play_action || "Phát"}`;
      trackOptionsModal.querySelector('[data-action="add-to-queue-from-modal"]').innerHTML = `<i class="fas fa-list-ul"></i> ${t.add_to_queue_action || "Thêm vào hàng đợi"}`;
      trackOptionsModal.querySelector('[data-action="add-to-playlist-from-modal"]').innerHTML = `<i class="fas fa-plus-square"></i> ${t.add_to_playlist_action || "Thêm vào playlist"}`;
      trackOptionsModal.querySelector('[data-action="toggle-favorite-from-modal"]').innerHTML = `<i class="far fa-heart"></i> ${t.add_to_favorites_action || "Thêm vào yêu thích"}`; // This will be dynamic
      trackOptionsModal.querySelector('[data-action="share-from-modal"]').innerHTML = `<i class="fas fa-share"></i> ${t.share_action || "Chia sẻ"}`;
      trackOptionsModal.querySelector('[data-action="view-track-info-from-modal"]').innerHTML = `<i class="fas fa-info-circle"></i> ${t.track_info_action || "Thông tin bài hát"}`;
  }


  // Update empty messages
  document.querySelectorAll('.empty-message').forEach(el => {
      if (el.closest('#favorites-section')) el.textContent = t.no_favorites_yet || 'Bạn chưa có bài hát yêu thích nào. Hãy thêm vào nhé!';
      if (el.closest('.playlist-detail-track-list')) el.textContent = t.empty_playlist || 'Playlist này chưa có bài hát nào.';
      if (el.closest('.queue-list')) {
          el.textContent = t.empty_queue || 'Hàng đợi trống. Thêm bài hát vào đây nhé!';
          if (el.nextElementSibling && el.nextElementSibling.classList.contains('empty-message-hint')) {
              el.nextElementSibling.textContent = t.empty_queue_hint || 'Bạn có thể thêm bài hát từ trang chủ hoặc thư viện.';
          }
      }
      // For general view-all section and related tracks
      if (el.closest('#view-all-grid')) el.textContent = t.no_tracks_to_display || 'Không có bài hát nào để hiển thị.';
      if (el.closest('.related-tracks-grid')) el.textContent = t.no_related_tracks || 'Không có bài hát liên quan.';
  });
  // Sidebar empty playlist message
  const emptyPlaylistSidebarMsg = document.querySelector('.empty-message-sidebar');
  if (emptyPlaylistSidebarMsg) {
      emptyPlaylistSidebarMsg.textContent = t.no_playlists_yet || 'Chưa có playlist nào. Hãy tạo cái mới nhé!';
  }

  // Update player control button aria labels
  document.querySelector('#shuffle-btn').ariaLabel = t.shuffle_btn_label || "Xáo trộn";
  document.querySelector('#prev-btn').ariaLabel = t.prev_btn_label || "Bài trước";
  document.querySelector('#play-pause-btn').ariaLabel = t.play_pause_btn_label || "Phát hoặc tạm dừng";
  document.querySelector('#next-btn').ariaLabel = t.next_btn_label || "Bài tiếp theo";
  document.querySelector('#repeat-btn').ariaLabel = t.repeat_btn_label || "Lặp lại";
  document.querySelector('#lyrics-btn').ariaLabel = t.lyrics_btn_label || "Lời bài hát";
  document.querySelector('#queue-btn').ariaLabel = t.queue_btn_label || "Hiển thị hàng đợi";
  document.querySelector('#volume-slider').ariaLabel = t.volume_slider_label || "Điều chỉnh âm lượng";
}

/**
 * Displays the "Now Playing" detailed section with information about the given track.
 * This function also handles playing the track if it's not already the current one.
 * @param {object} track The track object to display.
 */
// ui.js

function showNowPlayingDetails(track) {
    if (!track) return;
    const t = translations[musicLibrary.language];

    // Activate the now-playing-section
    showSection("now-playing-section");

    // Get elements
    const albumCoverImg = document.querySelector("#now-playing-album-cover");
    const titleEl = document.querySelector("#now-playing-title");
    const artistEl = document.querySelector("#now-playing-artist");
    const albumEl = document.querySelector("#now-playing-album");
    const lyricsContentEl = document.querySelector("#now-playing-lyrics");
    // const artistImgEl = document.querySelector("#now-playing-artist-img"); // Giữ nguyên
    const artistNameMiniEl = document.querySelector("#now-playing-artist-name-mini");
    const artistBioEl = document.querySelector("#now-playing-artist-bio");
    const nowPlayingFavoriteBtn = document.querySelector("#now-playing-favorite-btn");
    const nowPlayingPlayBtn = document.querySelector("#now-playing-play-btn");
    const showFullLyricsBtn = document.querySelector(".show-full-lyrics-btn");
    const nowPlayingMoreBtn = document.querySelector("#now-playing-more-btn");
    const lyricsFadeOverlay = document.querySelector("#now-playing-section .lyrics-content::after");

    // Populate track info
    if (albumCoverImg) albumCoverImg.src = track.cover || "./images/track_default.jpg";
    if (albumCoverImg) albumCoverImg.alt = escapeHTML(track.title);
    if (titleEl) titleEl.textContent = escapeHTML(track.title);
    if (artistEl) artistEl.textContent = escapeHTML(track.artist);
    if (albumEl) albumEl.textContent = `${escapeHTML(track.album || t.unknown_album || 'Unknown Album')} • ${track.year || 'N/A'}`;

 const viewArtistBtn = document.querySelector(".view-artist-btn");
    if (viewArtistBtn) {
        viewArtistBtn.textContent = t.view_more_artist || "Xem thêm"; // Đảm bảo văn bản được dịch
        // Xóa trình nghe hiện có để tránh trùng lặp nếu hàm được gọi nhiều lần
        if (viewArtistBtn._clickListener) {
            viewArtistBtn.removeEventListener('click', viewArtistBtn._clickListener);
        }
        // Thêm trình nghe mới
        viewArtistBtn._clickListener = () => {
            showArtistDetailsModal(track.artist); // Truyền tên nghệ sĩ
        };
        viewArtistBtn.addEventListener("click", viewArtistBtn._clickListener);
    }

    // Populate lyrics
    if (lyricsContentEl) {
        lyricsContentEl.innerHTML = `<p>${escapeHTML(track.lyrics || (t.no_lyrics || "Không có lời bài hát."))}</p>`;
        lyricsContentEl.classList.remove("expanded");
        if (showFullLyricsBtn) {
            if (!track.lyrics || track.lyrics.split('\n').length <= 10) {
                showFullLyricsBtn.style.display = 'none';
                lyricsContentEl.classList.add("expanded");
                lyricsContentEl.style.maxHeight = 'none';
            } else {
                showFullLyricsBtn.style.display = 'block';
                showFullLyricsBtn.textContent = t.show_more_lyrics || "Hiện thêm";
                lyricsContentEl.style.maxHeight = '300px';
            }
        }
    }

    // Populate artist info
    const artistImgEl = document.querySelector("#now-playing-artist-img");
    if (artistImgEl) {
        // Sử dụng track.artistCover nếu có, nếu không thì dùng ảnh mặc định
        loadArtistImage(artistImgEl, track.artistCover || "./images/artist_default.jpg");
    }
    if (artistNameMiniEl) artistNameMiniEl.textContent = escapeHTML(track.artist);
    if (artistBioEl) artistBioEl.textContent = escapeHTML(track.artistBio || (t.no_artist_bio || "Không có thông tin tiểu sử cho nghệ sĩ này."));

    // Update favorite button state for this section
    const isFavorited = musicLibrary.favorites.some(f => f.id === track.id);
    if (nowPlayingFavoriteBtn) {
        nowPlayingFavoriteBtn.classList.toggle("active", isFavorited);
        nowPlayingFavoriteBtn.querySelector("i").className = `fa-${isFavorited ? "solid" : "regular"} fa-heart`;
    }

    // Set play button for the specific track
    if (nowPlayingPlayBtn) {
        nowPlayingPlayBtn.onclick = () => playTrack(track);
        nowPlayingPlayBtn.innerHTML = `<i class="fas fa-play"></i> ${t.play_btn || 'Phát'}`;
    }

    // Set track ID for the more button
    if (nowPlayingMoreBtn) {
        nowPlayingMoreBtn.dataset.trackId = track.id;
        nowPlayingMoreBtn.ariaLabel = t.more_options_btn_label || 'Tùy chọn khác';
        nowPlayingMoreBtn.querySelector('i').className = 'fas fa-ellipsis-h';
    }

    // Render related tracks
    renderRelatedTracks(track.id);

    // Automatically play the track when details are shown, if not already playing
    if (!musicLibrary.currentTrack || musicLibrary.currentTrack.id !== track.id) {
         playTrack(track);
    } else {
         updatePlayerUI();
         document.querySelector("#play-pause-btn i").className = musicLibrary.isPlaying ? "fas fa-pause" : "fas fa-play";
    }
}

/**
 * Renders related tracks based on the currently viewed/played track's genre or artist.
 * @param {number} currentTrackId The ID of the track currently being viewed/played.
 */
function renderRelatedTracks(currentTrackId) {
    const relatedTracksGrid = document.querySelector(".related-tracks-grid");
    if (!relatedTracksGrid) return;

    showSkeletonLoading(relatedTracksGrid, 4); // Show skeleton for 4 related tracks

    setTimeout(() => { // Simulate data fetching delay
        relatedTracksGrid.innerHTML = "";
        const currentTrack = musicLibrary.tracks.find(t => t.id === currentTrackId);
        let related = [];
        const t = translations[musicLibrary.language];

        if (currentTrack) {
            // Try to find tracks by the same artist (excluding current track)
            related = musicLibrary.tracks.filter(t => t.artist === currentTrack.artist && t.id !== currentTrack.id);
            
            // If not enough, try to find tracks in the same genre
            if (related.length < 4) {
                const genreTracks = musicLibrary.tracks.filter(t => t.genre === currentTrack.genre && t.id !== currentTrack.id && !related.some(r => r.id === t.id));
                related = [...related, ...genreTracks];
            }
        }

        // Fill with random tracks if still not enough or no current track, ensuring no duplicates with current and existing related
        if (related.length < 4) {
            const existingIds = new Set([...related.map(t => t.id), currentTrackId]);
            const randomFill = getRandomTracks(4 - related.length, existingIds); // Pass Set of excluded IDs
            related = [...related, ...randomFill];
        }

        // Limit to 4 related tracks and remove duplicates
        // Using a Set for IDs to ensure uniqueness after combining various sources
        const uniqueRelated = [...new Map(related.map(item => [item.id, item])).values()].slice(0, 4);

        if (uniqueRelated.length === 0) {
            relatedTracksGrid.innerHTML = `<p class="empty-message">${t.no_related_tracks || "Không có bài hát liên quan."}</p>`;
            return;
        }

        uniqueRelated.forEach((track) => {
            const card = createTrackCard(track); // Use helper to create track card
            relatedTracksGrid.appendChild(card);
        });
    }, 500); // Simulate loading delay
}

/**
 * Loads an image into an HTMLImageElement (or similar) element, handling default icon on error.
 * Specifically for artist images that might be round.
 * @param {HTMLImageElement} element The img element to load into.
 * @param {string} src The URL of the image.
 */
function loadArtistImage(element, src) {
    if (!element || !(element instanceof HTMLImageElement)) {
        console.warn("Invalid element provided for loadArtistImage:", element);
        return;
    }

    // 1. Reset trạng thái hiển thị và thêm lớp placeholder
    element.src = ''; // Xóa src hiện tại
    element.style.display = 'none'; // Mặc định ẩn ảnh
    element.classList.add("artist-placeholder");

    // 2. Xử lý trường hợp không có src hợp lệ
    if (!src || typeof src !== "string") {
        element.src = "./images/artist_default.jpg"; // Gán ảnh mặc định
        element.style.display = 'block'; // Hiển thị ảnh mặc định
        return;
    }

    // 3. Đặt các bộ lắng nghe sự kiện tải ảnh
    element.onload = () => {
        element.style.display = 'block'; // Hiển thị ảnh khi tải thành công
        element.classList.remove("artist-placeholder"); // Xóa lớp placeholder
    };

    element.onerror = () => {
        element.src = "./images/artist_default.jpg"; // Fallback về ảnh mặc định nếu lỗi
        element.style.display = 'block'; // Hiển thị ảnh mặc định
        element.classList.add("artist-placeholder"); // Đảm bảo lớp placeholder có mặt
    };

    // 4. Gán src để bắt đầu tải ảnh
    element.src = src;
}

/**
 * Hiển thị một modal với thông tin chi tiết về một nghệ sĩ.
 * @param {string} artistName Tên của nghệ sĩ để hiển thị thông tin.
 */
function showArtistDetailsModal(artistName) {
    const modal = document.querySelector("#artist-detail-modal");
    const artistNameEl = modal.querySelector("#artist-detail-modal-name");
    const artistAvatarImg = modal.querySelector("#artist-detail-avatar");
    const artistBioFullEl = modal.querySelector("#artist-detail-bio-full");
    const t = translations[musicLibrary.language];

    if (!artistName) {
        // Xử lý trường hợp artistName không được cung cấp hoặc rỗng
        artistNameEl.textContent = t.unknown_artist || "Nghệ sĩ không xác định";
        loadArtistImage(artistAvatarImg, "./images/artist_default.jpg"); // Fallback về mặc định
        artistBioFullEl.textContent = t.no_artist_bio || "Không có thông tin tiểu sử cho nghệ sĩ này.";
        modal.classList.add("show");
        return;
    }
    const artistTrack = musicLibrary.tracks.find(track => track.artist === artistName);

    // Điền nội dung modal
    if (artistNameEl) artistNameEl.textContent = escapeHTML(artistName);
    
    if (artistAvatarImg) {
        loadArtistImage(artistAvatarImg, artistTrack ? artistTrack.artistCover : "./images/artist_default.jpg");
    }

    if (artistBioFullEl) {
        artistBioFullEl.textContent = escapeHTML(artistTrack?.artistBio || (t.no_artist_bio || "Không có thông tin tiểu sử cho nghệ sĩ này."));
    }

    // Hiển thị modal
    modal.classList.add("show");
}