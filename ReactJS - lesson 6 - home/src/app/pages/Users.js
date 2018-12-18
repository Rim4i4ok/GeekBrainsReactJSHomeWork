import React from 'react';
import UserStore from '../stores/userStore';
import { addUser, getUsers } from '../actions/userActions';
import UsersList from '../components/UsersList';
import { makeRandomString } from '../helpers/randomData';

export default class Users extends React.Component {

    constructor(params) {
        super(params);

        this.state = {
            users: []
        };

        this.newUser = this.newUser.bind(this);        
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser() {
        addUser(makeRandomString(10), makeRandomString(5), makeRandomString(12), makeRandomString(9));
    }   

    onUserChange() {
        this.setState({
            users: UserStore.users
        });
    }

    componentDidMount() {        
        UserStore.on('change', this.onUserChange);   
        getUsers();     
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newUser}>Add user</button>
                <UsersList users={this.state.users} />
            </div>
        );
    }
}