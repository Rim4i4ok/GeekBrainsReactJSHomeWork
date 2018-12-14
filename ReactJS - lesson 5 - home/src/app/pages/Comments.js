import React from 'react';
import CommentsList from '../components/Comment/CommentsList';

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {!this.props.children ? <CommentsList /> : this.props.children}
            </div>
        );
    }
}