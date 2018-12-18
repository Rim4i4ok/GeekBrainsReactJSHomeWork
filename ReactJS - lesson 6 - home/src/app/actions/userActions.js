import dispatcher from '../dispatcher';
import { ADD_USER, GET_USERS } from '../constants/userConstants';
import axios from 'axios';


export function addUser(name, username, email, phone) {
    dispatcher.dispatch({
        type: ADD_USER,
        data: { name, username, email, phone }
    });
}

export function getUsers() {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_USERS,
                data: response.data
            });
        });
}