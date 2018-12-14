import React from 'react';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';

export default class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.brand = 'React blog';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div className="container">
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>Main</MenuItem>
                    <MenuItem href="/posts" active={this.isActive('/posts')}>Posts</MenuItem>
                    <MenuItem href="/comments" active={this.isActive('/comments')}>Comments</MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>Users</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    &copy; 2018
                </footer>
            </div>
        );
    }
}