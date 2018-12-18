import React from 'react';
import PostStore from '../stores/postStore';
import { addPost, getPosts } from '../actions/postActions';
import PostsList from '../components/PostsList';
import { makeRandomString } from '../helpers/randomData';

export default class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

    newPost() {
        addPost(makeRandomString(20), Math.floor(Math.random() * 100), makeRandomString(100));
    }    

    onPostChange() {
        this.setState({
            posts: PostStore.posts
        });
    }

    componentDidMount() {        
        PostStore.on('change', this.onPostChange);
        getPosts();
    }

    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Add post</button>
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}