// search.js

function renderSearch() {
  const genreGrid = document.querySelector(".genre-grid");
  if (!genreGrid) return;

  showSkeletonLoading(genreGrid, 6, "genre-card"); // Pass type 'genre-card' for specific skeleton
  setTimeout(() => {
    genreGrid.innerHTML = "";
    const genres = [...new Set(musicLibrary.tracks.map((t) => t.genre))];
    genres.forEach((genre) => {
      const genreCard = document.createElement("div");
      genreCard.className = "genre-card";
      // Assign random gradient colors
      genreCard.style.background = `linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})`; 
      genreCard.innerHTML = `
        <h3>${escapeHTML(genre)}</h3>
        <div class="genre-image"></div> `;
      //Thay đổi URL bên ngoài thành đường dẫn cục bộ hoặc sử dụng một ảnh mặc định chung
      loadCoverImage(genreCard.querySelector(".genre-image"), `./images/genre_default.jpg`); // Hoặc một ảnh mặc định chung cho thể loại


      genreCard.addEventListener("click", () => {
        // When a genre card is clicked, navigate to the library section filtered by that genre.
        updateCurrentSectionUI("library-section");
        // Update filter buttons UI
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        document.querySelector(`.filter-btn[data-filter="genres"]`).classList.add("active");
        renderLibrary("genres", genre); // Pass the specific genre to filter
      });
      genreGrid.appendChild(genreCard);
    });
  }, 1000); // Simulate loading time

  const searchInput = document.querySelector(".search-input");
  const suggestionsContainer = document.querySelector(".suggestions");

  // Use a debounce function for the search input to limit frequent calls
  let debounceTimeout;
  const handleSearchInput = () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const query = searchInput.value.toLowerCase().trim(); // Trim whitespace
      suggestionsContainer.innerHTML = "";
      if (query.length >= 1) {
        const results = musicLibrary.tracks.filter(
          (track) =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            (track.genre && track.genre.toLowerCase().includes(query)) || // Check if genre exists
            (track.album && track.album.toLowerCase().includes(query))    // Check if album exists
        );

        if (results.length > 0) {
            results.forEach((track) => {
              const item = document.createElement("div");
              item.className = "suggestions-item";
              item.dataset.trackId = track.id;
              item.innerHTML = `
                <div class="quick-cover"></div> <div>
                  <h4>${escapeHTML(track.title)}</h4>
                  <p>${escapeHTML(track.artist)} - ${escapeHTML(track.album || translations[musicLibrary.language].unknown_album)}</p>
                </div>
              `;
              // Sử dụng loadCoverImage cho cover
              loadCoverImage(item.querySelector(".quick-cover"), track.cover || './images/track_default.jpg'); // CẬP NHẬT DÒNG NÀY

              item.addEventListener("click", () => {
                showNowPlayingDetails(track); // Show details when clicking a search suggestion
                suggestionsContainer.innerHTML = "";
                suggestionsContainer.style.display = "none"; // Hide suggestions
                searchInput.value = ""; // Clear search input
              });
              suggestionsContainer.appendChild(item);
            });
            suggestionsContainer.style.display = "block";
        } else {
            suggestionsContainer.style.display = "none";
        }
      } else {
        suggestionsContainer.style.display = "none";
      }
    }, 300); // Debounce for 300ms
  };
  searchInput.addEventListener("input", handleSearchInput);
}

/**
 * Returns a random color from a predefined list.
 * @returns {string} A hex color string.
 */
function getRandomColor() {
    const colors = [
        '#1DB954', '#1ED760', '#FF473A', '#840032', '#C62E65', 
        '#6C5B7B', '#C06C84', '#F67280', '#355C7D', '#90B77D', 
        '#450af5', '#c93aed', '#ffc04c', '#537d88', '#264653', 
        '#E63946', '#F4A261', '#2A9D8F', '#264653', '#A8DADC' 
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}