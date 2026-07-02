function moveSearchToHeader() {
  let moveSearchFunction = () => {
    let search_view = document.querySelector(".search-view-outer");
    let site_header = document.querySelector(".site-header");

    if (search_view && site_header) {
      site_header.appendChild(search_view);
      clearInterval(search_interval);
    }
  };
  try { moveSearchFunction(); } catch (e) {}
  let search_interval = setInterval(() => {
    moveSearchFunction();
  }, 200);
}

moveSearchToHeader();