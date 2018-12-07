import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <label>User Name</label>
                <input type="text" placeholder="user@lt.com" defaultValue="" />

                <br />

                <label>Password</label>
                <input type="password" placeholder="Password" defaultValue="" />

                <br />

                <input type="submit" value="Log In" />
            </div>
        );
    }
}