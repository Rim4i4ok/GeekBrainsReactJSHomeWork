import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

export default class Menu extends React.Component {
    render() {        
        let items = this.props.items.map((item, index) => {
            return (
            <li key={index}>
                <MenuItem href={item.href} title={item.title} />
            </li>
            )
        });

        return (
            <div>
                <h1>{this.props.titleMenu}</h1>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }    
}

Menu.propTypes = {
    titleMenu: PropTypes.string,
    items: PropTypes.array
}