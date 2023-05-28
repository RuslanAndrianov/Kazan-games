const navMenuCategories = document.getElementsByClassName("nav-menu-categories")[0];
const navList = document.getElementsByClassName("nav-menu-dropdown")[0];

navMenuCategories.addEventListener("click", (event) => {
    event.preventDefault();
    navList.classList.toggle("is-open");
});