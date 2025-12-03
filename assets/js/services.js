document.addEventListener("DOMContentLoaded", () => {

  /* TAB SWITCH */
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      tabs.forEach(t => t.classList.remove("active"));
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  /* LIST HANDLING + AUTO SLIDE */
  document.querySelectorAll(".item-list").forEach(list => {
    const items = list.querySelectorAll("li");
    const tabID = list.closest(".tab-content").id;
    const mainImg = document.getElementById(`${tabID}-main-img`);

    items.forEach(item => {
      item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        mainImg.src = item.dataset.img;
      });
    });

    /* Auto slide */
    let index = 0;
    setInterval(() => {
      index = (index + 1) % items.length;
      items[index].click();
    }, 3000);
  });

});