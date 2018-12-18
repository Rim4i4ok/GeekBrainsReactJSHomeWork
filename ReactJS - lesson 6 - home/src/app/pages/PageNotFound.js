import React from 'react';

export default class PageNotFound extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>
                <h1>Ошибка</h1>
                <p>Error 404!</p>
                <p>Страница не найдена!</p>
            </div>
        );
    }
}