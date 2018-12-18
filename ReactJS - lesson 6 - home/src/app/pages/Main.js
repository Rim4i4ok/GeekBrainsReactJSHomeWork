import React from 'react';

export default class Main extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>
                <h1>Главная страница</h1>
                <p>Добро пожаловать на наш сайт!</p>
            </div>
        );
    }
}