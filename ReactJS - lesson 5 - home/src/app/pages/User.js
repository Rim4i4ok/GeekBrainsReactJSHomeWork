import React from 'react';
import axios from 'axios';
import PostsList from '../components/Post/PostsList';
import UserProfile from '../components/User/User';

export default class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            posts: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
                this.setState({user: response.data});                

                let user = response.data;                
                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.params.userId}`)
                    .then((response) => {
                        this.setState({                            
                            user: user,
                            posts: response.data,
                        });
                    });
            });
    }

    render() {
        return (
            <div>
                <h1>User</h1>
                {this.state.user && <UserProfile {...this.state.user} />}
                
                {this.state.posts && <PostsList posts={this.state.posts} />}
            </div>
        );
    }
}