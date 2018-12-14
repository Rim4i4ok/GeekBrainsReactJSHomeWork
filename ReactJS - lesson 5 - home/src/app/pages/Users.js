import React from 'react';
import UsersList from '../components/User/UsersList';

export default class Users extends React.Component {
    render() {
        return (
            <div>            
                {!this.props.children ? <UsersList /> : this.props.children}        
            </div>
        );
    }
}