import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
    render() {
        return (
            <a target="_blank" href={this.props.href}>{this.props.title}</a>
        )
    }
}

MenuItem.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string
}