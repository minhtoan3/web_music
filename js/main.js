let currentActiveSectionId = 'home-section'; // Track current section for "back" button
let selectedPlaylistCover = null; // Biến global để lưu trữ URL Data-URL của ảnh bìa playlist được chọn (chỉ dùng tạm trong phiên)

function init() {
  loadHistory();
  // Khởi tạo các render ban đầu
  renderHome();
  renderSearch();
  renderLibrary();
  renderFavorites();
  renderPlaylists(); // Render playlists in sidebar
  renderQueue(); // Render queue in modal and player

  updateLanguageUI(); // Cần đảm bảo hàm này cập nhật cả text của custom dropdown
  updatePlayerUI(); // Update player UI on load

  // Event listener cho các nút điều hướng chính (header và sidebar)
  document.querySelectorAll(".nav-btn, .nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Đảm bảo nút được nhấn không phải là phần của mobile menu overlay khi sidebar đang mở
      if (window.innerWidth <= 768 && document.querySelector(".sidebar").classList.contains("open")) {
          // Explicitly close sidebar if nav item is clicked
          document.querySelector(".sidebar").classList.remove("open");
          const mobileOverlay = document.querySelector('.mobile-overlay');
          if (mobileOverlay) mobileOverlay.remove(); // Remove overlay when sidebar closes
      }

      const sectionId = btn.dataset.section + "-section";
      updateCurrentSectionUI(sectionId); // Sử dụng hàm mới để hiển thị section và cập nhật active states
    });
  });

  // Event listener cho nút xóa tìm kiếm
  document.querySelector(".search-clear").addEventListener("click", () => {
    document.querySelector(".search-input").value = "";
    document.querySelector(".suggestions").style.display = "none";
  });

  // Event listener cho các nút mở modal
// Event listener cho các nút mở modal (bao gồm chuyển đổi giữa login/register)
document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định của thẻ 'a' nếu có

    const targetModalId = btn.dataset.modal;

    // Ẩn tất cả các modal đang hiển thị trước
    document.querySelectorAll('.modal.show').forEach(modal => {
      modal.classList.remove('show');
    });

    // Hiển thị modal mục tiêu
    const targetModal = document.querySelector(`#${targetModalId}`);
    if (targetModal) {
      targetModal.classList.add("show");
    }

    // Khi mở modal tạo playlist, reset trạng thái tải ảnh
    if (targetModalId === "create-playlist-modal") {
      const playlistCoverPreview = document.querySelector("#playlist-cover-preview");
      const playlistCoverUploadArea = document.querySelector("#playlist-cover-upload-area");
      const playlistCoverInput = document.querySelector("#playlist-cover-input");

      selectedPlaylistCover = null; // Reset biến lưu URL ảnh
      if (playlistCoverPreview) {
        playlistCoverPreview.src = "./images/playlist_default.jpg"; // Đặt lại ảnh preview về mặc định
        playlistCoverPreview.style.display = 'none'; // Ẩn ảnh preview
      }
      if (playlistCoverUploadArea) {
        playlistCoverUploadArea.classList.remove('has-image'); // Xóa class để hiển thị lại icon/text
        playlistCoverUploadArea.style.borderColor = ""; // Reset border màu sắc
      }
      if (playlistCoverInput) {
        playlistCoverInput.value = ''; // Reset giá trị của input file
      }
    }
  });
});

  // Event listener cho các nút đóng modal và overlay
  // Sử dụng event delegation cho modal overlay và nút đóng chính
  document.body.addEventListener('click', (e) => {
    // Check if clicked outside modal-content but within a modal-overlay, or clicked a specific close button
    const modalOverlay = e.target.closest('.modal-overlay');
    const modalCloseButton = e.target.closest('.modal-close1, .modal-close'); // Covers both types of close buttons

    if (modalOverlay && !e.target.closest('.modal-content')) {
        // If clicked on overlay directly and not on modal content, close modal
        const modal = modalOverlay.closest('.modal');
        if (modal) modal.classList.remove("show");
    } else if (modalCloseButton) {
        // If clicked a close button, find the parent modal and close it
        const modal = modalCloseButton.closest('.modal');
        if (modal) modal.classList.remove("show");
    }
  });


  // Xử lý form đăng nhập
  document.querySelector("#login-modal form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    try {
      // Giả lập API call
      const response = await new Promise(resolve => setTimeout(() => {
        if (email === "test@example.com") {
          resolve({ ok: true, json: () => Promise.resolve({ name: "Người dùng Test" }) });
        } else {
          resolve({ ok: false, json: () => Promise.resolve({ error: "Email không tồn tại!" }) });
        }
      }, 500));

      const result = await response.json();
      if (!response.ok) {
        showNotification(result.error, "error");
        return;
      }
      document.querySelector(".auth-buttons").classList.add("hidden");
      document.querySelector(".user-profile").classList.remove("hidden");
      document.querySelector("#user-name").textContent = escapeHTML(result.name);
      document.querySelector("#login-modal").classList.remove("show");
      showNotification("Đăng nhập thành công!", "success");
    } catch (error) {
      showNotification("Đăng nhập thất bại: " + error.message, "error");
    }
  });

  // Xử lý form đăng ký
  document.querySelector("#register-modal form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#register-email").value;
    const password = document.querySelector("#register-password").value;
    const name = document.querySelector("#register-name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    try {
      // Giả lập API call
      const response = await new Promise(resolve => setTimeout(() => {
        if (email === "existing@example.com") {
          resolve({ ok: false, json: () => Promise.resolve({ error: "Email đã tồn tại!" }) });
        } else {
          resolve({ ok: true, json: () => Promise.resolve({ name, email }) });
        }
      }, 500));

      const result = await response.json();
      if (!response.ok) {
        showNotification("Đăng ký thất bại: " + result.error, "error");
        return;
      }
      document.querySelector(".auth-buttons").classList.add("hidden");
      document.querySelector(".user-profile").classList.remove("hidden");
      document.querySelector("#user-name").textContent = escapeHTML(name);
      document.querySelector("#register-modal").classList.remove("show");
      showNotification("Đăng ký thành công!", "success");
    } catch (error) {
      showNotification("Đăng ký thất bại: " + error.message, "error");
    }
  });

  // Xử lý nút đăng xuất
  document.querySelector("#logout-btn").addEventListener("click", () => {
    document.querySelector(".user-profile").classList.add("hidden");
    document.querySelector(".auth-buttons").classList.remove("hidden");
    // Clear user-related data (e.g., current login state)
    // For this example, we don't have actual login state management, so just UI
    showNotification("Đăng xuất thành công!", "success"); // Using general notification function
  });

  // --- BẮT ĐẦU PHẦN TẢI ẢNH PLAYLIST VÀ XỬ LÝ LỖI QUOTAEXCEEDEDERROR ---
  const playlistCoverInput = document.querySelector("#playlist-cover-input");
  const playlistCoverUploadArea = document.querySelector("#playlist-cover-upload-area");
  const playlistCoverPreview = document.querySelector("#playlist-cover-preview");
  const choosePhotoBtn = document.querySelector(".choose-photo-btn");
  const t = translations[musicLibrary.language]; // Lấy bản dịch

  // Xử lý click nút "Chọn ảnh"
  if (choosePhotoBtn) {
    choosePhotoBtn.addEventListener("click", () => {
      playlistCoverInput.click(); // Kích hoạt input file ẩn
    });
  }

  // Xử lý chọn file từ input
  if (playlistCoverInput) {
    playlistCoverInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) { // Kiểm tra loại file
        const reader = new FileReader();
        reader.onload = (e) => {
          selectedPlaylistCover = e.target.result; // Lưu URL Data-URL của ảnh (chỉ dùng trong phiên hiện tại)
          if (playlistCoverPreview) {
            playlistCoverPreview.src = selectedPlaylistCover;
            playlistCoverPreview.style.display = 'block'; // Hiển thị ảnh preview
          }
          if (playlistCoverUploadArea) {
            playlistCoverUploadArea.classList.add('has-image'); // Thêm class để ẩn icon/text
          }
        };
        reader.readAsDataURL(file); // Đọc file thành Data-URL
      } else if (file) { // Thông báo nếu file không phải ảnh
        showNotification(t.invalid_image_file || "Vui lòng chọn một file ảnh hợp lệ.", "error");
      }
    });
  }

  // Xử lý kéo thả ảnh (Drag and Drop)
  if (playlistCoverUploadArea) {
    playlistCoverUploadArea.addEventListener("dragover", (event) => {
      event.preventDefault(); // Cho phép thả
      playlistCoverUploadArea.style.borderColor = "#1db954"; // Thay đổi màu viền khi kéo qua
    });

    playlistCoverUploadArea.addEventListener("dragleave", (event) => {
      event.preventDefault();
      playlistCoverUploadArea.style.borderColor = ""; // Trở về màu mặc định
    });

    playlistCoverUploadArea.addEventListener("drop", (event) => {
      event.preventDefault();
      playlistCoverUploadArea.style.borderColor = ""; // Trở về màu mặc định

      const file = event.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) { // Kiểm tra loại file
        const reader = new FileReader();
        reader.onload = (e) => {
          selectedPlaylistCover = e.target.result; // Lưu URL Data-URL của ảnh (chỉ dùng trong phiên hiện tại)
          if (playlistCoverPreview) {
            playlistCoverPreview.src = selectedPlaylistCover;
            playlistCoverPreview.style.display = 'block'; // Hiển thị ảnh preview
          }
          if (playlistCoverUploadArea) {
            playlistCoverUploadArea.classList.add('has-image'); // Thêm class để ẩn icon/text
          }
        };
        reader.readAsDataURL(file); // Đọc file thành Data-URL
      } else if (file) { // Thông báo nếu file không phải ảnh
        showNotification(t.invalid_image_file || "Vui lòng kéo thả một file ảnh hợp lệ.", "error");
      }
    });
  }

  // Xử lý form tạo playlist
  document.querySelector("#create-playlist-modal form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#playlist-name").value;
    const description = document.querySelector("#playlist-description").value;
    // Basic validation
    if (!name.trim()) {
        showNotification(translations[musicLibrary.language].playlist_name_empty || "Tên playlist không được để trống!", "error");
        return;
    }

    const newPlaylistId = musicLibrary.playlists.length > 0 ? Math.max(...musicLibrary.playlists.map(p => p.id)) + 1 : 1;
    const newPlaylist = {
      id: newPlaylistId,
      name: name,
      description: description,
      tracks: [],
    };
    musicLibrary.playlists.push(newPlaylist);
    saveHistory(); // Lưu thay đổi vào playlists
    document.querySelector("#create-playlist-modal").classList.remove("show");
    renderPlaylists();
    showNotification(translations[musicLibrary.language].notification_created_playlist.replace("{name}", name), "success");
    // Chuyển sang section thư viện hoặc playlist sau khi tạo
    updateCurrentSectionUI("library-section");

    // Reset form fields và trạng thái tải ảnh sau khi tạo playlist
    document.querySelector("#playlist-name").value = "";
    document.querySelector("#playlist-description").value = "";
    document.querySelector("#playlist-name").nextElementSibling.textContent = "0/100";
    document.querySelector("#playlist-description").nextElementSibling.textContent = "0/500";
    selectedPlaylistCover = null;
    if (playlistCoverInput) {
      playlistCoverInput.value = '';
    }
  });

  // Cập nhật số ký tự cho tên playlist và mô tả
  document.querySelectorAll("#playlist-name, #playlist-description").forEach((input) => {
    input.addEventListener("input", (e) => {
      const charCountDiv = e.target.nextElementSibling;
      if (charCountDiv && charCountDiv.classList.contains('char-count')) {
          const count = e.target.value.length;
          charCountDiv.textContent = `${count}/${e.target.maxLength}`;
      }
    });
  });

  // Player controls
  document.querySelector("#play-pause-btn").addEventListener("click", () => {
    if (musicLibrary.isPlaying) {
      audio.pause();
      musicLibrary.isPlaying = false;
      document.querySelector("#play-pause-btn i").className = "fas fa-play";
    } else if (musicLibrary.currentTrack) {
      audio.play();
      musicLibrary.isPlaying = true;
      document.querySelector("#play-pause-btn i").className = "fas fa-pause";
    }
  });

  document.querySelector("#next-btn").addEventListener("click", () => {
    if (musicLibrary.shuffle) {
      const randomTrack = getSmartRandomTrack();
      playTrack(randomTrack, musicLibrary.queue.findIndex(t => t.id === randomTrack.id));
    } else if (musicLibrary.currentTrackIndex < musicLibrary.queue.length - 1) {
      playTrack(musicLibrary.queue[musicLibrary.currentTrackIndex + 1], musicLibrary.currentTrackIndex + 1);
    } else if (musicLibrary.repeat === "all") {
      playTrack(musicLibrary.queue[0], 0);
    } else {
        // If not repeating and at end, stop playback and reset UI
        audio.pause();
        musicLibrary.isPlaying = false;
        document.querySelector("#play-pause-btn i").className = "fas fa-play";
        updatePlayerUI();
    }
  });

  document.querySelector("#prev-btn").addEventListener("click", () => {
    if (audio.currentTime > 3) { // Restart current track if played for more than 3 seconds
      audio.currentTime = 0;
    } else if (musicLibrary.currentTrackIndex > 0) {
      playTrack(musicLibrary.queue[musicLibrary.currentTrackIndex - 1], musicLibrary.currentTrackIndex - 1);
    } else if (musicLibrary.repeat === "all") { // Loop back to end if at start and repeat all
        playTrack(musicLibrary.queue[musicLibrary.queue.length - 1], musicLibrary.queue.length - 1);
    } else {
        // If not repeating and at start, stop playback
        audio.pause();
        musicLibrary.isPlaying = false;
        document.querySelector("#play-pause-btn i").className = "fas fa-play";
        updatePlayerUI();
    }
  });

  document.querySelector("#shuffle-btn").addEventListener("click", () => {
    musicLibrary.shuffle = !musicLibrary.shuffle;
    document.querySelector("#shuffle-btn").classList.toggle("active", musicLibrary.shuffle);
    showNotification(translations[musicLibrary.language].notification_shuffle.replace("{state}", musicLibrary.shuffle ? translations[musicLibrary.language]['on'] || "Bật" : translations[musicLibrary.language]['off'] || "Tắt"), "info");
    saveHistory(); // Save shuffle state
  });

  document.querySelector("#repeat-btn").addEventListener("click", () => {
    const t = translations[musicLibrary.language].notification_repeat;
    if (musicLibrary.repeat === "off") {
      musicLibrary.repeat = "all";
      document.querySelector("#repeat-btn i").className = "fas fa-redo active";
      showNotification(t.all, "info");
    } else if (musicLibrary.repeat === "all") {
      musicLibrary.repeat = "one";
      document.querySelector("#repeat-btn i").className = "fas fa-redo-alt active"; // Font Awesome for repeat one
      showNotification(t.one, "info");
    } else {
      musicLibrary.repeat = "off";
      document.querySelector("#repeat-btn i").className = "fas fa-redo";
      showNotification(t.off, "info");
    }
    saveHistory(); // Save repeat state
  });

  document.querySelector("#queue-btn").addEventListener("click", () => {
    document.querySelector("#queue-modal").classList.add("show");
  });

  document.querySelector("#lyrics-btn").addEventListener("click", () => {
      if (musicLibrary.currentTrack) {
          showNowPlayingDetails(musicLibrary.currentTrack);
      } else {
          showNotification(translations[musicLibrary.language].no_song_playing_lyrics || "Không có bài hát nào đang phát để hiển thị lời bài hát.", "info");
      }
  });


  audio.addEventListener("timeupdate", updateProgress);

  audio.addEventListener("ended", () => {
    if (musicLibrary.repeat === "one") {
      playTrack(musicLibrary.currentTrack, musicLibrary.currentTrackIndex);
    } else {
      document.querySelector("#next-btn").click();
    }
  });

  document.querySelector("#volume-slider").addEventListener("input", (e) => {
    audio.volume = parseFloat(e.target.value);
    const volumeFill = document.querySelector(".volume-fill");
    if (volumeFill) {
      volumeFill.style.width = `${audio.volume * 100}%`;
    }
    // Update volume icon based on volume level
    const volumeIcon = document.querySelector(".volume-control i");
    if (audio.volume === 0) {
        volumeIcon.className = "fas fa-volume-mute";
    } else if (audio.volume < 0.5) {
        volumeIcon.className = "fas fa-volume-down";
    } else {
        volumeIcon.className = "fas fa-volume-up";
    }
    localStorage.setItem("volume", audio.volume); // Save volume state
  });

  // Khởi tạo trạng thái volume fill và icon khi tải trang
  // Use a default value if not set in localStorage
  const storedVolume = parseFloat(localStorage.getItem("volume"));
  if (!isNaN(storedVolume)) {
      audio.volume = storedVolume;
      document.querySelector("#volume-slider").value = storedVolume;
  }
  const initialVolume = audio.volume; // Use actual audio volume
  const volumeFill = document.querySelector(".volume-fill");
  if (volumeFill) {
    volumeFill.style.width = `${initialVolume * 100}%`;
  }
  const volumeIcon = document.querySelector(".volume-control i");
  if (initialVolume === 0) {
      volumeIcon.className = "fas fa-volume-mute";
  } else if (initialVolume < 0.5) {
      volumeIcon.className = "fas fa-volume-down";
  } else {
      volumeIcon.className = "fas fa-volume-up";
  }

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    document.querySelector(".theme-toggle i").className = `fas fa-${isLight ? "sun" : "moon"}`;
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    document.querySelector(".theme-toggle i").className = "fas fa-sun";
  }

  // Language toggle (CUSTOM SELECT)
  const customSelectTrigger = document.querySelector(".custom-select-trigger");
  const customOptionsContainer = document.querySelector(".custom-options-container");
  const selectedLanguageText = document.getElementById("selected-language-text");

  if (customSelectTrigger && customOptionsContainer && selectedLanguageText) {
    // Set initial text based on loaded language
    selectedLanguageText.textContent = translations[musicLibrary.language].language_name_full || (musicLibrary.language === 'vi' ? 'Tiếng Việt' : 'English');

    customSelectTrigger.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent document click from immediately closing
      customOptionsContainer.classList.toggle("show");
      customSelectTrigger.classList.toggle("active"); // Add active class to rotate arrow
    });

    customOptionsContainer.querySelectorAll(".custom-option").forEach(option => {
      option.addEventListener("click", () => {
        const selectedValue = option.dataset.value;
        if (musicLibrary.language !== selectedValue) {
          musicLibrary.language = selectedValue;
          localStorage.setItem("language", musicLibrary.language);
          // Update displayed text
          selectedLanguageText.textContent = translations[musicLibrary.language].language_name_full || (selectedValue === 'vi' ? 'Tiếng Việt' : 'English');
          updateLanguageUI();
          // Re-render relevant sections to apply new language translations
          renderHome();
          renderSearch();
          renderLibrary();
          renderFavorites();
          renderQueue();
          renderPlaylists();
          updatePlayerUI();
          if (document.getElementById('now-playing-section').classList.contains('active') && musicLibrary.currentTrack) {
              showNowPlayingDetails(musicLibrary.currentTrack);
          }
        }
        customOptionsContainer.classList.remove("show"); // Close dropdown
        customSelectTrigger.classList.remove("active"); // Remove active class
      });
    });

    // Close custom dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!customSelectTrigger.contains(e.target) && !customOptionsContainer.contains(e.target)) {
        customOptionsContainer.classList.remove("show");
        customSelectTrigger.classList.remove("active");
      }
    });
  }

  // Xử lý kéo thả thanh tiến trình
  const progressBar = document.querySelector(".progress-bar");
  let isDraggingProgressBar = false;

  progressBar.addEventListener("mousedown", (e) => {
    isDraggingProgressBar = true;
    updateSeek(e);
    // Prevent text selection during drag
    e.preventDefault();
  });
  // Use document for mousemove and mouseup to handle drags outside the bar
  document.addEventListener("mousemove", (e) => {
    if (isDraggingProgressBar) {
      updateSeek(e);
    }
  });
  document.addEventListener("mouseup", () => {
    isDraggingProgressBar = false;
  });
  // Handle touch events for mobile
  progressBar.addEventListener("touchstart", (e) => {
      isDraggingProgressBar = true;
      updateSeek(e.touches[0]);
      e.preventDefault(); // Prevent scrolling
  });
  document.addEventListener("touchmove", (e) => {
      if (isDraggingProgressBar) {
          updateSeek(e.touches[0]);
      }
  });
  document.addEventListener("touchend", () => {
      isDraggingProgressBar = false;
  });

  function updateSeek(e) {
    if (!musicLibrary.currentTrack || !audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    let percent = (e.clientX - rect.left) / rect.width;
    // For touch events, clientX is in e.touches[0].clientX
    if (e.touches && e.touches[0]) {
        percent = (e.touches[0].clientX - rect.left) / rect.width;
    }

    percent = Math.max(0, Math.min(1, percent));
    audio.currentTime = audio.duration * percent;
  }

  // Xử lý mobile menu toggle
  document.querySelector(".mobile-menu-toggle").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
    // Optionally add a temporary overlay on content when sidebar is open on mobile
    if (window.innerWidth <= 768) {
        let overlay = document.querySelector('.mobile-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('mobile-overlay');
            document.body.appendChild(overlay);
            overlay.addEventListener('click', () => {
                sidebar.classList.remove("open");
                overlay.remove();
            });
        } else {
            // If sidebar is being closed via toggle, remove overlay
            if (!sidebar.classList.contains('open')) {
                overlay.remove();
            }
        }
    } else {
        document.querySelectorAll('.mobile-overlay').forEach(ov => ov.remove());
    }
  });


  // Gắn listener cho nút #now-playing-more-btn để mở track-options-modal
  document.querySelector("#now-playing-more-btn").addEventListener("click", (e) => {
      if (musicLibrary.currentTrack) {
          showTrackOptionsModal(musicLibrary.currentTrack); // Gọi showTrackOptionsModal
      } else {
          showNotification(translations[musicLibrary.language].no_song_playing || "Không có bài hát đang phát.", "info");
      }
  });

  // THÊM: Event listener cho các hành động của track-options-modal
  document.addEventListener('click', (e) => {
      const targetButton = e.target.closest('#track-options-modal .btn');
      // KIỂM TRA dataset.trackId thay vì dataset.itemId
      if (targetButton && targetButton.dataset.trackId) {
          const itemId = parseInt(targetButton.dataset.trackId); // Lấy từ dataset.trackId
          const itemType = targetButton.dataset.itemType; // Lấy từ dataset.itemType
          const action = targetButton.dataset.action;
          const t = translations[musicLibrary.language];
          const modal = document.querySelector('#track-options-modal');

          let item = null;
          if (itemType === 'track') {
              item = musicLibrary.tracks.find(t => t.id === itemId);
          } else if (itemType === 'playlist') {
              // Logic cho playlist nếu bạn mở rộng modal này cho playlist sau này
              item = musicLibrary.playlists.find(p => p.id === itemId);
          }

          if (!item) return;

          switch(action) {
              case 'play-track-from-modal':
                  playTrack(item); // item ở đây là track
                  break;
              case 'add-to-queue-from-modal':
                  musicLibrary.queue.push(item);
                  renderQueue();
                  showNotification(t.notification_added_queue.replace("{title}", item.title), "success");
                  saveHistory();
                  break;
              case 'add-to-playlist-from-modal':
                  showAddToPlaylistModal(item);
                  break;
              case 'toggle-favorite-from-modal':
                  const isFavorited = musicLibrary.favorites.some(f => f.id === item.id);
                  if (isFavorited) {
                      musicLibrary.favorites = musicLibrary.favorites.filter((f) => f.id !== item.id);
                      showNotification(t.notification_removed_favorites.replace("{title}", item.title), "success");
                  } else {
                      musicLibrary.favorites.push(item);
                      showNotification(t.notification_added_favorites.replace("{title}", item.title), "success");
                  }
                  renderFavorites();
                  updatePlayerUI(); // Update favorite icon in player if playing
                  saveHistory();
                  // Cập nhật text nút trong modal ngay lập tức
                  const updatedIsFavorited = musicLibrary.favorites.some(f => f.id === item.id);
                  targetButton.innerHTML = `<i class="fa-${updatedIsFavorited ? 'solid' : 'regular'} fa-heart"></i> ${updatedIsFavorited ? (t.remove_from_favorites_action || 'Xóa khỏi yêu thích') : (t.add_to_favorites_action || 'Thêm vào yêu thích')}`;
                  break;
              case 'share-from-modal':
                  const shareTextTrack = (t.share_track_message || 'Nghe "{title}" của {artist}: {src}')
                                      .replace("{title}", item.title)
                                      .replace("{artist}", item.artist || '')
                                      .replace("{src}", item.src);
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(shareTextTrack)
                          .then(() => showNotification((t.link_copied_notification || 'Đã sao chép liên kết "{title}"').replace("{title}", item.title), "success"))
                          .catch(err => console.error('Failed to copy text: ', err));
                  } else {
                      showNotification(t.no_share_link_clipboard || "Trình duyệt của bạn không hỗ trợ sao chép.", "info");
                  }
                  break;
              case 'view-track-info-from-modal':
                  showTrackInfo(item);
                  break;
              // THÊM CÁC CASE MỚI CHO PLAYLIST ACTIONS (nếu có)
              case 'play-playlist-from-modal':
                  // Đây là logic đã có cho playlist
                  musicLibrary.queue = [...item.tracks];
                  musicLibrary.currentTrackIndex = -1;
                  if (musicLibrary.queue.length > 0) {
                      playTrack(musicLibrary.queue[0], 0);
                  }
                  showNotification((t.playing_playlist || 'Đang phát playlist "{name}"').replace('{name}', item.name), "info");
                  break;
              case 'shuffle-playlist-from-modal':
                  // Đây là logic đã có cho playlist
                  musicLibrary.queue = [...item.tracks].sort(() => 0.5 - Math.random());
                  musicLibrary.currentTrackIndex = -1;
                  if (musicLibrary.queue.length > 0) {
                      playTrack(musicLibrary.queue[0], 0);
                  }
                  showNotification((t.shuffling_playlist || 'Đang xáo trộn playlist "{name}"').replace('{name}', item.name), "info");
                  break;
              case 'share-playlist-from-modal':
                  // Đây là logic đã có cho playlist
                  const shareTextPlaylist = (t.share_item_message || 'Khám phá {itemType} "{name}" trên Music App!')
                                      .replace('{itemType}', t.playlist_type_label || 'Playlist')
                                      .replace('{name}', item.name);
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(shareTextPlaylist)
                          .then(() => showNotification((t.link_copied_notification || 'Đã sao chép liên kết "{title}"').replace("{title}", item.name), "success"))
                          .catch(err => console.error('Failed to copy text: ', err));
                  } else {
                      showNotification(t.no_share_link_clipboard || "Trình duyệt của bạn không hỗ trợ sao chép.", "info");
                  }
                  break;
              case 'delete-playlist-from-modal':
                  // Đây là logic đã có cho playlist
                  musicLibrary.playlists = musicLibrary.playlists.filter(p => p.id !== item.id);
                  saveHistory();
                  renderPlaylists();
                  showNotification(t.notification_deleted_playlist.replace("{name}", item.name), "success");
                  // Đóng modal và có thể điều hướng về library/playlists nếu đang ở chi tiết playlist
                  const currentSection = document.querySelector('.section.active');
                  const libraryContent = document.querySelector("#library-section .library-content");
                  if (currentSection && currentSection.id === "library-section" && libraryContent.innerHTML.includes('playlist-detail-header')) {
                      renderLibrary("playlists");
                  } else {
                      if (currentSection && currentSection.id === "library-section") {
                         renderLibrary(document.querySelector('.filter-btn.active')?.dataset.filter || "all");
                      } else {
                         updateCurrentSectionUI("home-section");
                      }
                  }
                  break;
            }
            // Đóng track options modal sau hành động, trừ khi nó mở modal khác
            if (action !== 'add-to-playlist-from-modal' && action !== 'view-track-info-from-modal') {
                modal.classList.remove('show');
            }
        }
    });


  // Global keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts);

  // Filter buttons in Library section
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderLibrary(btn.dataset.filter);
    });
  });

  // Now Playing Details specific actions
  document.querySelector("#now-playing-play-btn").addEventListener("click", () => {
      if (musicLibrary.currentTrack) {
          playTrack(musicLibrary.currentTrack, musicLibrary.currentTrackIndex);
      }
  });

  document.querySelector("#now-playing-favorite-btn").addEventListener("click", (e) => {
    if (musicLibrary.currentTrack) {
      const currentTrackId = musicLibrary.currentTrack.id;
      const index = musicLibrary.favorites.findIndex(t => t.id === currentTrackId);
      if (index === -1) {
          musicLibrary.favorites.push(musicLibrary.currentTrack);
          showNotification(translations[musicLibrary.language].notification_added_favorites.replace("{title}", musicLibrary.currentTrack.title), "success");
      } else {
          musicLibrary.favorites.splice(index, 1);
          showNotification(translations[musicLibrary.language].notification_removed_favorites.replace("{title}", musicLibrary.currentTrack.title), "success");
      }
      // Toggle active class and icon
      e.currentTarget.classList.toggle('active', index === -1);
      e.currentTarget.querySelector('i').className = `fa-${index === -1 ? 'solid' : 'regular'} fa-heart`;
      renderFavorites(); // Re-render favorites section
      saveHistory(); // Save changes
    }
  });

  // Handle "Show Full Lyrics" button
  const lyricsContent = document.querySelector("#now-playing-lyrics");
  const showFullLyricsBtn = document.querySelector(".show-full-lyrics-btn");

  if (showFullLyricsBtn && lyricsContent) {
    showFullLyricsBtn.addEventListener("click", () => {
      lyricsContent.classList.toggle("expanded");
      if (lyricsContent.classList.contains("expanded")) {
        showFullLyricsBtn.textContent = translations[musicLibrary.language].collapse_lyrics || "Thu gọn";
        lyricsContent.style.maxHeight = 'none'; // Ensure content fully visible
      } else {
        lyricsContent.style.maxHeight = '300px'; // Re-apply max-height
        showFullLyricsBtn.textContent = translations[musicLibrary.language].show_more_lyrics || "Hiện thêm";
      }
    });
  }

  // Back to home button in now playing section
  document.querySelector(".back-to-home-btn").addEventListener("click", () => {
      updateCurrentSectionUI(localStorage.getItem('previousSectionId') || "home-section"); // Go back to previous section or home
  });

  // Back to previous section button in View All section
  document.querySelector(".back-to-previous-section-btn").addEventListener("click", () => {
      updateCurrentSectionUI(localStorage.getItem('previousSectionIdForViewAll') || "home-section"); // Go back to previous section for view all
  });

  // "Show All" buttons logic
  document.querySelectorAll(".show-all-btn").forEach(btn => {
      btn.addEventListener("click", () => {
          const target = btn.dataset.sectionTarget; // e.g., "recent-all", "recommended-all"
          let allItems = [];
          let sectionTitle = "";

          // Save current section to go back to
          const currentSection = document.querySelector('.section.active');
          if (currentSection) {
              localStorage.setItem('previousSectionIdForViewAll', currentSection.id);
          }


          if (target === "recent-all") {
              allItems = [...new Map(musicLibrary.history.map(item => [item.id, item])).values()].reverse(); // Reverse to show most recent first
              sectionTitle = translations[musicLibrary.language].all_recent_tracks || "Tất cả bài hát đã nghe gần đây";
          } else if (target === "recommended-all") {
              // Ensure uniqueness from recent tracks when showing all recommended
              const recentTrackIds = [...new Map(musicLibrary.history.map(item => [item.id, item])).values()].map(t => t.id);
              allItems = musicLibrary.tracks.filter(t => !recentTrackIds.includes(t.id)).slice(0, 20); // Get more recommended tracks
              sectionTitle = translations[musicLibrary.language].all_recommended_tracks || "Tất cả bài hát được tạo riêng cho bạn";
          } else if (target === "chart-all") {
              // Ensure uniqueness from recent and recommended when showing all chart
              const recentTrackIds = [...new Map(musicLibrary.history.map(item => [item.id, item])).values()].map(t => t.id);
              const recommendedTrackIds = musicLibrary.tracks.slice(0, 6).map(t => t.id); // Assuming these are the recommended
              allItems = musicLibrary.tracks.filter(t => !recentTrackIds.includes(t.id) && !recommendedTrackIds.includes(t.id)).slice(0, 20); // Get more chart tracks
              sectionTitle = translations[musicLibrary.language].all_chart_tracks || "Tất cả bài hát trong bảng xếp hạng V-Pop";
          } else if (target === "related-all" && musicLibrary.currentTrack) { // For related tracks in now playing section
              // Logic to get all related tracks, not just 4
              const currentTrack = musicLibrary.currentTrack;
              let related = musicLibrary.tracks.filter(t => t.artist === currentTrack.artist && t.id !== currentTrack.id);
              const genreTracks = musicLibrary.tracks.filter(t => t.genre === currentTrack.genre && t.id !== currentTrack.id && !related.some(r => r.id === t.id));
              related = [...related, ...genreTracks];
              // Fill with all other tracks if needed for demonstration, ensuring no duplicates
              const allOthers = musicLibrary.tracks.filter(t => !related.some(r => r.id === t.id) && t.id !== currentTrack.id);
              allItems = [...related, ...allOthers];
              // Ensure allItems are unique (important if multiple categories add same track)
              allItems = [...new Map(allItems.map(item => [item.id, item])).values()];
              sectionTitle = (translations[musicLibrary.language].all_related_tracks || `Tất cả bài hát liên quan đến "{title}"`).replace("{title}", currentTrack.title);
          }

          displayViewAll(allItems, sectionTitle);
      });
  });

  // Ensure current section is tracked on page load
  const initialSection = document.querySelector('.section.active');
  if (initialSection) {
      currentActiveSectionId = initialSection.id;
  }
}

/**
 * Shows a specific section and hides all others.
 * Updates the previous section for back navigation.
 * @param {string} sectionId The ID of the section to show (e.g., "home-section").
 */
function showSection(sectionId) {
    // Save current active section before changing
    const prevActiveSection = document.querySelector('.section.active');
    if (prevActiveSection && prevActiveSection.id !== sectionId) {
        localStorage.setItem('previousSectionId', prevActiveSection.id);
    }

    hideAllSections(); // Hide all current sections first
    const targetSection = document.querySelector(`#${sectionId}`);
    if (targetSection) {
        targetSection.classList.add("active");
        // Scroll to top of the content area when changing section
        const mainContentElement = document.querySelector('.content');
        if (mainContentElement) {
            mainContentElement.scrollTop = 0;
        }
    }
    // Update active state in nav buttons/items
    document.querySelectorAll(".nav-btn, .nav-item").forEach(btn => {
        const btnSectionId = btn.dataset.section + "-section";
        if (btnSectionId === sectionId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    currentActiveSectionId = sectionId; // Update current active section
}

function hideAllSections() {
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
}

/**
 * Updates the UI to show a specific section, often after a modal closes or action.
 * @param {string} targetSectionId The ID of the section to activate.
 */
function updateCurrentSectionUI(targetSectionId) {
    // This function will now simply call showSection, which handles active states and previous section storage
    showSection(targetSectionId);
}

/**
 * Displays a list of tracks in the generic "View All" section.
 * @param {Array<Object>} tracks The array of track objects to display.
 * @param {string} title The title for the "View All" section.
 */
function displayViewAll(tracks, title) {
    const viewAllSection = document.querySelector("#view-all-section");
    const viewAllTitle = document.querySelector("#view-all-title");
    const viewAllGrid = document.querySelector("#view-all-grid");

    if (!viewAllSection || !viewAllTitle || !viewAllGrid) {
        console.error("View All section elements not found.");
        return;
    }

    viewAllTitle.textContent = escapeHTML(title);
    viewAllGrid.innerHTML = ""; // Clear previous content
    showSkeletonLoading(viewAllGrid, Math.min(tracks.length, 10)); // Show skeleton

    setTimeout(() => {
        viewAllGrid.innerHTML = ""; // Clear skeletons
        if (tracks.length === 0) {
            viewAllGrid.innerHTML = `<p class="empty-message">${translations[musicLibrary.language].no_tracks_to_display || "Không có bài hát nào để hiển thị."}</p>`;
            return;
        }
        tracks.forEach(track => {
            const card = document.createElement("div");
            card.className = "card";
            card.dataset.trackId = track.id;
            card.innerHTML = `
                <div class="card-cover"><i class="fas fa-music"></i></div>
                <div class="card-info">
                    <h3>${escapeHTML(track.title)}</h3>
                    <p>${escapeHTML(track.artist)}</p>
                </div>
                `;
            card.addEventListener("click", (e) => {
                // Clicking on the card itself (not more-btn) should show details
                if (!e.target.closest('.more-btn')) {
                    showNowPlayingDetails(track);
                }
            });
            // THÊM NÚT MORE-OPTIONS CHO CARD Ở ĐÂY
            const moreOptionsBtn = document.createElement('button');
            moreOptionsBtn.className = 'more-btn'; // Sử dụng class 'more-btn' đã có
            moreOptionsBtn.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
            moreOptionsBtn.dataset.trackId = track.id;
            moreOptionsBtn.ariaLabel = translations[musicLibrary.language].more_options_btn_label || 'Tùy chọn khác';
            moreOptionsBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Ngăn click vào card cha
                showTrackOptionsModal(track); // Mở modal tùy chọn bài hát
            });
            // Append moreOptionsBtn directly to card for consistent positioning
            card.appendChild(moreOptionsBtn);

            loadCoverImage(card.querySelector(".card-cover"), track.cover || './images/track_default.jpg');
            viewAllGrid.appendChild(card);
        });
    }, 500);

    showSection("view-all-section"); // Activate the view all section
}


document.addEventListener("DOMContentLoaded", init);