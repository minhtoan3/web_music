// player.js

const audio = new Audio();
const CROSSFADE_DURATION = 500; // Reduced for faster transition

/**
 * Plays a specified track or toggles play/pause if the same track is clicked.
 * Handles crossfade effect when switching tracks.
 * @param {object} track The track object to play.
 * @param {number} [index=-1] The index of the track in the current queue.
 */
function playTrack(track, index = -1) {
  if (!track || !track.src) {
    console.error("Invalid track provided for playTrack:", track);
    showNotification(translations[musicLibrary.language].error_playing_track || "Không thể phát bài hát này.", "error");
    return;
  }

  // Lấy tham chiếu đến player.
  // Player giờ đây luôn hiển thị theo CSS, nên không cần thêm/xóa class 'show' ở đây.
  const playerElement = document.querySelector('.player');

  // Nếu cùng bài hát, chỉ bật/tắt phát
  if (musicLibrary.currentTrack && musicLibrary.currentTrack.id === track.id) {
    if (audio.paused) {
      audio.play();
      musicLibrary.isPlaying = true;
      showNotification((translations[musicLibrary.language].resumed_playback || 'Đã tiếp tục phát "{title}"').replace('{title}', track.title), "info");
      // Player đã cố định, không cần thêm class 'show'
    } else {
      audio.pause();
      musicLibrary.isPlaying = false;
      showNotification((translations[musicLibrary.language].paused_playback || 'Đã tạm dừng "{title}"').replace('{title}', track.title), "info");
    }
    updatePlayerUI(); // Luôn cập nhật UI sau khi thay đổi trạng thái
    saveHistory(); // Lưu trạng thái phát mới
    return;
  }

  // Nếu chuyển bài, thiết lập dữ liệu bài hát mới và xử lý crossfade
  musicLibrary.currentTrack = track;
  // Đảm bảo bài hát có trong queue và cập nhật index
  const existingQueueIndex = musicLibrary.queue.findIndex(t => t.id === track.id);
  if (existingQueueIndex !== -1) {
    musicLibrary.currentTrackIndex = existingQueueIndex;
  } else {
    // Nếu bài hát không có trong queue, THÊM VÀO CUỐI và đặt index về vị trí mới
    musicLibrary.queue.push(track); // SỬA ĐỔI DÒNG NÀY: Thay unshift bằng push
    musicLibrary.currentTrackIndex = musicLibrary.queue.length - 1; // SỬA ĐỔI DÒNG NÀY
  }

  updatePlayerUI(); // Cập nhật UI với thông tin bài hát mới TRƯỚC khi mờ dần (ảnh bìa, tiêu đề, nghệ sĩ)
  renderQueue(); // Render lại queue để làm nổi bật bài hát đang phát mới

  // Xử lý crossfade
  if (audio.src && musicLibrary.isPlaying) { // Chỉ crossfade nếu có gì đó đang phát
    let currentVolume = audio.volume;
    const fadeOutInterval = setInterval(() => {
      currentVolume = Math.max(0, currentVolume - 0.1); // Giảm âm lượng 10% mỗi bước
      audio.volume = currentVolume;
      if (currentVolume <= 0) {
        clearInterval(fadeOutInterval);
        audio.pause();
        startNewTrackAfterFade(track); // Chuyển bài mới sau khi mờ dần
      }
    }, CROSSFADE_DURATION / 10); // Khoảng thời gian dựa trên thời lượng mờ dần
  } else {
    // Nếu không có gì đang phát hoặc audio.src trống, phát bài mới ngay lập tức
    startNewTrackAfterFade(track);
  }
  showNotification((translations[musicLibrary.language].now_playing_notification || 'Đang phát "{title}"').replace('{title}', track.title), "info");
  saveHistory(); // Lưu trạng thái ban đầu trước khi fade-in hoàn tất
}

/**
 * Starts playing a new track after the fade-out (or immediately if no fade).
 * Handles setting audio source, volume fade-in, and updating history.
 * @param {object} track The track object to start playing.
 */
function startNewTrackAfterFade(track) {
  // musicLibrary.currentTrack và musicLibrary.currentTrackIndex đã được thiết lập bởi playTrack
  audio.src = track.src;
  audio.volume = 0; // Bắt đầu với âm lượng 0 để fade-in
  
  audio.play().catch(error => {
    console.error("Error playing audio:", error);
    showNotification((translations[musicLibrary.language].error_playing_track || "Không thể phát bài hát: {title}").replace("{title}", track.title), "error");
    musicLibrary.isPlaying = false; // Đặt trạng thái phát thành false khi lỗi
    document.querySelector("#play-pause-btn i").className = "fas fa-play";
    updatePlayerUI(); // Cập nhật UI khi lỗi
  });

  musicLibrary.isPlaying = true;
  document.querySelector("#play-pause-btn i").className = "fas fa-pause";
  updatePlayerUI(); // Quan trọng: Cập nhật UI player (nút play/pause, yêu thích, v.v.) sau khi bài hát bắt đầu phát

  let currentVolume = 0;
  const fadeInInterval = setInterval(() => {
    currentVolume = Math.min(1, currentVolume + 0.1); // Tăng âm lượng 10% mỗi bước
    audio.volume = currentVolume;
    if (currentVolume >= 1) clearInterval(fadeInInterval);
  }, CROSSFADE_DURATION / 10); // Khoảng thời gian dựa trên thời lượng mờ dần

  // Thêm vào lịch sử (chỉ các bài hát duy nhất theo ID và giữ chúng gần đây)
  const existingHistoryIndex = musicLibrary.history.findIndex(h => h.id === track.id);
  if (existingHistoryIndex > -1) {
    musicLibrary.history.splice(existingHistoryIndex, 1); // Xóa mục cũ để di chuyển lên đầu
  }
  musicLibrary.history.push({ ...track, timestamp: new Date().toISOString() });
  saveHistory(); // Lưu danh sách lịch sử đã cập nhật và thông tin bài hát hiện tại
}

/**
 * Gets a "smart" random track for shuffle mode.
 * Prioritizes tracks in the current queue that haven't been played recently.
 * Falls back to any track in the queue, then any track in the library.
 * @returns {object|null} A random track object or null if no tracks are available.
 */
function getSmartRandomTrack() {
  const recentTracksIds = musicLibrary.history.slice(-10).map((t) => t.id); // Lấy 10 ID bài hát đã phát gần đây nhất
  
  // Ưu tiên các bài hát trong queue hiện tại mà chưa được phát gần đây
  let availableTracksInQueue = musicLibrary.queue.filter((t) => !recentTracksIds.includes(t.id));

  if (availableTracksInQueue.length > 0) {
    // Chọn một bài hát ngẫu nhiên từ các bài hát có sẵn trong queue
    return availableTracksInQueue[Math.floor(Math.random() * availableTracksInQueue.length)];
  } else if (musicLibrary.queue.length > 0) {
    // Nếu tất cả các bài hát trong queue đã được phát gần đây, chỉ chọn một bài hát ngẫu nhiên từ toàn bộ queue
    return musicLibrary.queue[Math.floor(Math.random() * musicLibrary.queue.length)];
  }
  
  // Nếu queue trống, thử lấy một bài hát ngẫu nhiên từ toàn bộ thư viện nhạc, trừ bài hiện tại nếu đang phát
  const currentTrackId = musicLibrary.currentTrack ? musicLibrary.currentTrack.id : null;
  const allAvailableTracks = musicLibrary.tracks.filter(t => t.id !== currentTrackId && !recentTracksIds.includes(t.id));
  if (allAvailableTracks.length > 0) {
      return allAvailableTracks[Math.floor(Math.random() * allAvailableTracks.length)];
  }
  // Fallback: Nếu vẫn không có bài hát, trả về một bài hát ngẫu nhiên từ tất cả nếu không có gì khác hoạt động
  if (musicLibrary.tracks.length > 0) {
      return musicLibrary.tracks[Math.floor(Math.random() * musicLibrary.tracks.length)];
  }
  return null; // Không có bài hát nào để phát
}

function updateProgress() {
  // Đảm bảo audio.duration là một số hợp lệ, khác 0 trước khi tính toán
  if (!musicLibrary.currentTrack || isNaN(audio.duration) || audio.duration === 0) { //
      document.querySelector(".current-time").textContent = "0:00";
      document.querySelector(".duration").textContent = "0:00";
      document.querySelector(".progress-fill").style.width = "0%";
      document.querySelector(".progress-handle").style.left = "0%";
      return;
  }
  
  const progressFill = document.querySelector(".progress-fill");
  const progressHandle = document.querySelector(".progress-handle");
  const currentTimeDisplay = document.querySelector(".current-time");
  const durationDisplay = document.querySelector(".duration");

  const progress = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progress}%`;
  progressHandle.style.left = `${progress}%`;

  currentTimeDisplay.textContent = formatTime(audio.currentTime); //
  // Chỉ cập nhật duration nếu nó hiện tại là "0:00" hoặc nếu nó thay đổi đáng kể
  if (durationDisplay.textContent === "0:00" || durationDisplay.textContent !== formatTime(audio.duration)) { //
     durationDisplay.textContent = formatTime(audio.duration); //
  }
}