import React from 'react';
import PostsList from '../components/Post/PostsList';

export default class Posts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {!this.props.children ? <PostsList /> : this.props.children}
            </div>
        );
    }
}