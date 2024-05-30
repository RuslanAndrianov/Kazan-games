import { GamesTab } from "../js/react-components/games-tab.js"

// Получение данных с БД

const request = new XMLHttpRequest();
const url = 'http://localhost:8080/games';
request.open("GET", url);
request.send();

// Заполнение данных на сайте из БД

request.onreadystatechange = (e) => {
    if (request.readyState == 4) {
        let games = JSON.parse(request.responseText);
        console.log(games);
        let gamesElems = document.getElementsByClassName("game");
        for (let i = 0; i < games.length; i++) {
            let gamesElem = gamesElems[i];
            let gameName = gamesElem.querySelector(".game-name");
            gameName.childNodes[2].textContent = games[i].name;
            let gamePrice = gamesElem.querySelector(".game-price")
            gamePrice.childNodes[2].textContent = games[i].price + " р.";
            let gamePeople = gamesElem.querySelector(".game-people")
            gamePeople.childNodes[2].textContent = games[i].people;
        }
    }
}

// Создание табов "Мировые хиты", "Игры для компании" и "Семейные играми"

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(GamesTab, null),
    React.createElement(GamesTab, null),
    React.createElement(GamesTab, null)
), document.getElementsByClassName("games")[0]);

// Переключение между "Мировыми хитами", "Играми для компании" и "Семейными играми"

const mainGamesChoiseWrap = document.getElementsByClassName("main-games-choices")[0];
const mainGamesChoises = document.getElementsByClassName("main-games-choice");
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
    if (target && target.classList.contains("main-games-choice")) {
        for (let i = 0; i < mainGamesChoises.length; i++) {
            mainGamesChoises[i].classList.remove("choice");
        }
        
        for (let i = 0; i < mainGamesChoises.length; i++) {
            if (target === mainGamesChoises[i]) {
                target.classList.add("choice");
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});

hideTabContent(1);