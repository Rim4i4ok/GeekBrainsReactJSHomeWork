import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render() {
        const menuItems = [
            { href: "/", title: "Главная" },
            { href: "/about", title: "О нас" },
            { href: "/service", title: "Услуги" },
            { href: "/contacts", title: "Контакты" }
        ];

        return (
            <div>
                <div>
                    <Menu titleMenu="Основное меню сайта" items={menuItems} />
                </div>
                <div>
                    <Login />
                </div>
            </div>
        );
    }    
}

ReactDOM.render(<App />, document.getElementById('root'));