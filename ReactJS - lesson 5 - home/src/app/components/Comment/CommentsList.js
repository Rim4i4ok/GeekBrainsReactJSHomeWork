import React from 'react';
import axios from 'axios';
import Comment from './comment';

export default class CommentsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []        
        }

        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then((response) => {
                this.setState({comments: response.data});
            });
    }    

    render() {
        if(!this.state.comments.length) {
            return null;
        } else {
            let comments = this.state.comments.map((comment, index) => {
                return <Comment key={index} {...comment} />
            });

            return (
                <div>
                    <h1>Comments</h1>
                    {comments}
                </div>
            );
        }
    }
}