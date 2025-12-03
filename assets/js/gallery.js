  // Sample images
  const images = [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/500/300?random=3",
    "https://picsum.photos/500/300?random=4",
    "https://picsum.photos/500/300?random=5",
    "https://picsum.photos/500/300?random=6",
    "https://picsum.photos/500/300?random=7",
    "https://picsum.photos/500/300?random=8",
    "https://picsum.photos/500/300?random=9",
    "https://picsum.photos/500/300?random=10",
    "https://picsum.photos/500/300?random=11",
    "https://picsum.photos/500/300?random=12"
  ];

  const itemsPerPage = 6;
  let currentPage = 1;
  const gallery = document.getElementById("gallery");
  const pagination = document.getElementById("pagination");

  function displayGallery(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageImages = images.slice(start, end);

    pageImages.forEach(src => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="gallery-item shadow">
          <img src="${src}" alt="Gallery Image">
        </div>`;
      gallery.appendChild(col);
    });
  }

  function setupPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(images.length / itemsPerPage);

    for(let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = "page-item";
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayGallery(currentPage);
      });
      pagination.appendChild(li);
    }
  }

  displayGallery(currentPage);
  setupPagination();