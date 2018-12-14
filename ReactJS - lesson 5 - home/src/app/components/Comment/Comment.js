import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${this.props.postId}`}>
                        {this.props.name}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}