ReactDOM.render(React.createElement(NavMenu, null), document.getElementsByClassName("nav")[0]);

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(GamesTab, null),
    React.createElement(GamesTab, null),
    React.createElement(GamesTab, null)
), document.getElementsByClassName("games")[0]);