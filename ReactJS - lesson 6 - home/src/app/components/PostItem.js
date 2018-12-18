import React from 'react';
import {Link} from 'react-router';

export default class PostItem extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
				<div className="card border-secondary mb-3">
					<h3 className="card-header">
						<Link to={`/users/${this.props.userId}`}>
							{this.props.title}
						</Link>
					</h3>
					<div className="card-body text-secondary">
						<div>{this.props.body}</div>
					</div>
				</div>
			);
	}
}