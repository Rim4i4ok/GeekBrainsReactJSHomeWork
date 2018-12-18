import dispatcher from '../dispatcher';
import { ADD_POST, GET_POSTS } from '../constants/postConstants';
import axios from 'axios';

export function addPost(title, userId, body) {
    dispatcher.dispatch({
        type: ADD_POST,
        data: { title, userId, body }
    })
}

export function getPosts() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                data: response.data,
            });
        });
}