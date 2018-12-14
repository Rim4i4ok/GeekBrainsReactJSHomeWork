import React from 'react';
import axios from 'axios';
import PostMessage from '../components/Post/Post';
import UserProfile from '../components/User/User';

export default class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null,
            user: null,
        };
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response) => {                
                
                let post = response.data;                
                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then((response) => {
                        this.setState({
                            post: post,
                            user: response.data
                        });
                    });
            });
    }

    render() {
        return (
            <div>
                <h1>Post</h1>
                {this.state.post && <PostMessage {...this.state.post} />}

                <h1>User</h1>
                {this.state.user && <UserProfile {...this.state.user} />}
            </div>
        );
    }
}