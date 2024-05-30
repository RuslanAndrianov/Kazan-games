import { NavMenu } from '../js/react-components/navmenu.js'

// Создание навигационного меню

ReactDOM.render(React.createElement(NavMenu, null), document.getElementsByClassName("nav")[0]);

// Гамбургер-меню в мобильной версии

const navMenuCategories = document.getElementsByClassName("nav-menu-categories")[0];
const navList = document.getElementsByClassName("nav-menu-dropdown")[0];

navMenuCategories.addEventListener("click", (event) => {
    navList.classList.toggle("hide");
});