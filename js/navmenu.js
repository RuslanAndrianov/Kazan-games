class NavMenu extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'nav-menu-categories' },
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u2261'
                )
            ),
            React.createElement(
                'div',
                { className: 'nav-menu-dropdown hide' },
                React.createElement(
                    'ul',
                    { className: 'nav-menu' },
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: 'catalog.html' },
                            '\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0433\u0440'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: 'FAQ.html' },
                            'FAQ'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: 'payment.html' },
                            '\u0423\u0441\u043B\u043E\u0432\u0438\u044F'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: 'contacts.html' },
                            '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
                        )
                    )
                )
            )
        );
    }
}