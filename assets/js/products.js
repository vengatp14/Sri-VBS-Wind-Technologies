  const products = [
      {name: "iPhone 15", category: "electronics", img: "https://picsum.photos/300?1"},
      {name: "Smart Watch", category: "electronics", img: "https://picsum.photos/300?2"},
      {name: "Men's Jacket", category: "fashion", img: "https://picsum.photos/300?3"},
      {name: "Sofa Cushion", category: "home", img: "https://picsum.photos/300?4"},
      {name: "Makeup Kit", category: "beauty", img: "https://picsum.photos/300?5"},
      {name: "LED Lamp", category: "home", img: "https://picsum.photos/300?6"},
      {name: "Lipstick", category: "beauty", img: "https://picsum.photos/300?7"},
      {name: "Jeans", category: "fashion", img: "https://picsum.photos/300?8"},
      {name: "Bluetooth Speaker", category: "electronics", img: "https://picsum.photos/300?9"},
      {name: "Hair Dryer", category: "beauty", img: "https://picsum.photos/300?10"},
      {name: "Coffee Maker", category: "home", img: "https://picsum.photos/300?11"},
      {name: "Sunglasses", category: "fashion", img: "https://picsum.photos/300?12"}
    ];

    const perPage = 6;
    let currentPage = 1;

    function renderProducts() {
      const search = document.getElementById("searchInput").value.toLowerCase();
      const selectedCats = [...document.querySelectorAll('.catFilter:checked')].map(c => c.value);

      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search) &&
        (selectedCats.length ? selectedCats.includes(p.category) : true)
      );

      const productGrid = document.getElementById("productGrid");
      const noResults = document.getElementById("noResults");
      productGrid.innerHTML = "";

      if (filtered.length === 0) {
        noResults.style.display = "block";
        document.getElementById("pagination").innerHTML = "";
        return;
      } else {
        noResults.style.display = "none";
      }

      // Pagination
      const totalPages = Math.ceil(filtered.length / perPage);
      if (currentPage > totalPages) currentPage = totalPages;

      const start = (currentPage - 1) * perPage;
      const paginated = filtered.slice(start, start + perPage);

      paginated.forEach(p => {
        productGrid.innerHTML += `
          <div class="col-lg-4 col-6">
            <div class="product-card card">
              <img src="${p.img}" alt="${p.name}">
              <div class="card-body text-center">
                <h5 class="card-title">${p.name}</h5>
                <a href="https://wa.me/91XXXXXXXXXX?text=I want to order: ${p.name}" target="_blank" class="whatsapp-btn"><i class="bi bi-whatsapp"></i> Order</a>
              </div>
            </div>
          </div>
        `;
      });

      // Pagination buttons
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
          <li class="page-item ${i === currentPage ? 'active' : ''}">
            <button class="page-link" onclick="goPage(${i})">${i}</button>
          </li>
        `;
      }
    }

    function goPage(page) {
      currentPage = page;
      renderProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById("searchInput").addEventListener("input", () => { currentPage = 1; renderProducts(); });
    document.querySelectorAll(".catFilter").forEach(c => c.addEventListener("change", () => { currentPage = 1; renderProducts(); }));

    renderProducts();


    