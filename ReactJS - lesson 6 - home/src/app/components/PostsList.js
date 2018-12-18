import React from 'react';
import PostItem from './PostItem';

export default class PostsList extends React.Component {

	constructor(params) {
		super(params);		
	}

	render() {
		if(!this.props.posts.length) {
			return null;
		}

		let posts = this.props.posts.map((post, index) => {
			return <PostItem key={index} {...post}/>
		});

		return (
				<div>
					<h1>Посты</h1>
					<div>
						{posts}
					</div>
				</div>
			);
	}
}