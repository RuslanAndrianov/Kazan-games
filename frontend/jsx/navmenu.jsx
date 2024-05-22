class NavMenu extends React.Component {
    render() {
        return (
            <div>
                <div className='nav-menu-categories'>
                    <p>Категории</p>
                    <p>≡</p>
                </div>
                <div className='nav-menu-dropdown hide'>
                    <ul className='nav-menu'>
                        <li>
                            <a href='catalog.html'>Каталог игр</a>
                        </li>
                        <li>
                            <a href='FAQ.html'>FAQ</a>
                        </li>
                        <li>
                            <a href='payment.html'>Условия</a>
                        </li>
                        <li>
                            <a href='contacts.html'>Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
