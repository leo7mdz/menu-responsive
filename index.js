const menu = document.querySelector(".menu"),
  iconMenu = document.querySelector(".icon-menu"),
  searchForm = document.querySelector(".search-form"),
  iconSearch = document.querySelector(".fa-search");

document.addEventListener("click", (e) => {
  if (e.target === iconMenu) {
    menu.classList.toggle("active");
    searchForm.classList.remove("search-active");
    if (menu.classList.contains("active")) {
      iconMenu.classList.replace("fa-bars", "fa-x");
    } else {
      iconMenu.classList.replace("fa-x", "fa-bars");
    }
  }

  if (e.target === iconSearch) {
    searchForm.classList.toggle("search-active");
    menu.classList.remove("active");
    iconMenu.classList.replace("fa-x", "fa-bars");
  }
});
