import { GameCard } from "./gamecard.js";

class GamesTab extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "main-games-tab" },
            React.createElement(GameCard, null),
            React.createElement(GameCard, null),
            React.createElement(GameCard, null)
        );
    }
}

export { GamesTab }