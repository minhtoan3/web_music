// utils.js

const notifications = [];
const notificationSound = new Audio();

function escapeHTML(str) {
  if (typeof str !== 'string') { // Ensure input is string
      return String(str);
  }
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) { // Handle invalid input
    return "0:00";
  }
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return minutes + ":" + (secs < 10 ? "0" : "") + secs;
}

/**
 * Displays a temporary notification message to the user.
 * Manages a limited number of notifications in the UI.
 * @param {string} message The message to display.
 * @param {string} type The type of notification (e.g., "info", "success", "error").
 */
function showNotification(message, type = "info") {
  const notificationContainer = document.querySelector("#notification-list");
  if (!notificationContainer) {
      console.warn("Notification list element not found!");
      return;
  }

  // Remove oldest notification if limit reached (e.g., 3 notifications)
  // Ensure we are only removing notifications currently in the DOM and our array
  while (notifications.length >= 3) {
    const oldestNotification = notifications.shift(); // Remove from array start
    if (oldestNotification && notificationContainer.contains(oldestNotification)) {
        oldestNotification.remove(); // Remove from DOM
    }
  }

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `<span class="notification-message">${escapeHTML(message)}</span>`;
  
  notificationContainer.appendChild(notification);
  notifications.push(notification); // Add new notification to the end of the array

  // Play sound if a valid sound source is set
  if (notificationSound.src) { 
    notificationSound.currentTime = 0; // Rewind to start if already playing
    notificationSound.play().catch(e => console.warn("Notification sound play failed:", e)); // Catch potential autoplay errors
  }
  
  // Add 'show' class for animation
  requestAnimationFrame(() => { // Use requestAnimationFrame for smoother animation trigger
    notification.classList.add('show');
  });

  // Automatically remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    // After transition, remove from DOM and array
    const onTransitionEnd = () => {
        notification.remove();
        const index = notifications.indexOf(notification);
        if (index > -1) {
            notifications.splice(index, 1);
        }
        notification.removeEventListener('transitionend', onTransitionEnd); // Clean up listener
    };
    notification.addEventListener('transitionend', onTransitionEnd); 
  }, 3000);
}

/**
 * Loads an image into a container element, displaying a specified default image
 * or a default icon on error or if no valid URL is provided.
 *
 * @param {HTMLElement} containerElement The container element (e.g., div with class .card-cover, .quick-cover).
 * @param {string} imageUrl The URL of the image.
 * @param {string} [defaultIconClass='fas fa-music'] The Font Awesome icon class to display if no image is loaded.
 * @param {boolean} [isRound=false] If true, adds 'round-cover' class for circular display.
 */
function loadCoverImage(containerElement, imageUrl, defaultIconClass = 'fas fa-music', isRound = false) {
    if (!containerElement) {
        console.warn("loadCoverImage: containerElement is null or undefined.");
        return;
    }

    let imgElement = containerElement.querySelector('img');
    let iconElement = containerElement.querySelector('i');
    if (imgElement) imgElement.remove();
    if (iconElement) iconElement.remove();
    
    containerElement.style.backgroundImage = ''; // Xóa mọi background image cũ
    containerElement.classList.remove("gradient-cover", "gradient-cover-2", "has-image", "has-icon", "round-cover");

    // Thêm class round-cover nếu cần
    if (isRound) {
        containerElement.classList.add("round-cover");
    }
    imgElement = document.createElement('img');
    imgElement.loading = "lazy"; // Sử dụng lazy loading để cải thiện hiệu suất ban đầu
    imgElement.alt = "cover";
    containerElement.appendChild(imgElement);

    iconElement = document.createElement('i');
    iconElement.className = defaultIconClass; // Sử dụng icon mặc định được truyền vào
    containerElement.appendChild(iconElement);
    const FALLBACK_DEFAULT_IMAGE_PATH = './images/album_default.jpg'; 

    // 3. Gắn các trình lắng nghe sự kiện cho <img>
    imgElement.onload = () => {
        imgElement.style.display = 'block'; // Hiển thị ảnh
        iconElement.style.display = 'none'; // Ẩn icon
        containerElement.classList.add('has-image'); // Thêm class để CSS biết có ảnh
        containerElement.classList.remove('has-icon'); // Loại bỏ class icon
    };

    imgElement.onerror = () => {
        console.warn(`Failed to load image: ${imageUrl}. Displaying default image.`);
        imgElement.src = FALLBACK_DEFAULT_IMAGE_PATH; // Thử tải ảnh mặc định
 
        imgElement.style.display = 'block'; // Giả định ảnh mặc định sẽ tải
        iconElement.style.display = 'none'; // Giả định ảnh mặc định sẽ tải
        containerElement.classList.add('has-image');
        containerElement.classList.remove('has-icon');
    };

    // 4. Xử lý URL ảnh
    if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '') {
        imgElement.src = imageUrl;
        // Nếu là data URL (base64), nó thường không kích hoạt onload/onerror, nên hiển thị ngay
        if (imageUrl.startsWith('data:')) {
            imgElement.style.display = 'block';
            iconElement.style.display = 'none';
            containerElement.classList.add('has-image');
            containerElement.classList.remove('has-icon');
        }
    } else {
        // Nếu không có URL ảnh hợp lệ, hiển thị ảnh mặc định ngay lập tức
        console.warn("Invalid imageUrl provided. Displaying default image.");
        imgElement.src = FALLBACK_DEFAULT_IMAGE_PATH;
        imgElement.style.display = 'block';
        iconElement.style.display = 'none';
        containerElement.classList.add('has-image');
        containerElement.classList.remove('has-icon');
    }
}

// Global keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Example: Spacebar to play/pause
    if (e.code === 'Space' && !e.target.closest('input, textarea')) { // Prevent triggering if typing in input/textarea
        e.preventDefault(); // Prevent page scrolling
        document.querySelector("#play-pause-btn").click();
    }
}