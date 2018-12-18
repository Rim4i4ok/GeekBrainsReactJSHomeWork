import React from 'react';
import User from './User';

export default class UsersList extends React.Component {

    constructor(props) {
        super(props);       
    }

    render() {
        if(!this.props.users.length){
            return null; 
        }

        let users = this.props.users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }
}