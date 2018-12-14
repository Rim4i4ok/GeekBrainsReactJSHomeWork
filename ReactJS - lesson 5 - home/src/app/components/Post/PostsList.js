import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostsList extends React.Component {

    constructor(props) {
        super(props);       

        if(!props.posts) { 
            
            this.state = {
                posts: []        
            }
            
            axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then((response) => {
                    this.setState({posts: response.data});
                });            
        } else {
            this.state = {
                posts: props.posts       
            }
        }
    }    

    render() {
        if(!this.state.posts.length) {
            return null;
        } else {
            let posts = this.state.posts.map((post, index) => {
                return <Post key={index} {...post} />
            });

            return (
                <div>
                    <h1>Posts</h1>
                    {posts}
                </div>
            );
        }
    }
}