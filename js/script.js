// Гамбургер-меню в мобильной версии

const navMenuCategories = document.getElementsByClassName("nav-menu-categories")[0];
const navList = document.getElementsByClassName("nav-menu-dropdown")[0];

navMenuCategories.addEventListener("click", (event) => {
    navList.classList.toggle("hide");
});

// Табы

const mainGamesChoiseWrap = document.getElementsByClassName("main-games-choises")[0];
const mainGamesChoises = document.getElementsByClassName("main-games-choise");
const mainGamesTabContent = document.getElementsByClassName("main-games-tab");

function hideTabContent(a) {
    for (let i = a; i < mainGamesTabContent.length; i++) {
        mainGamesTabContent[i].classList.remove("show");
        mainGamesTabContent[i].classList.add("hide");
    }
}

function showTabContent(b) {
    if (mainGamesTabContent[b].classList.contains("hide")) {
        mainGamesTabContent[b].classList.remove("hide");
        mainGamesTabContent[b].classList.add("show");
    }
}

mainGamesChoiseWrap.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("main-games-choise")) {
        for (let i = 0; i < mainGamesChoises.length; i++) {
            mainGamesChoises[i].classList.remove("choise");
        }
        
        for (let i = 0; i < mainGamesChoises.length; i++) {
            if (target === mainGamesChoises[i]) {
                target.classList.add("choise");
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});

hideTabContent(1);

//
