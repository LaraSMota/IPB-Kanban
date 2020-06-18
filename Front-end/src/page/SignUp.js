import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
                posts: [],
                errorMsg: ''
                    }
	}

	componentDidMount() {
		axios
			.get('http://localhost:52719/api/Users')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				
				{posts.length
					? posts.map(post => <div key={post.userid}>{post.firstName}.{post.lastName}.{post.email}.{post.nickname}.{post.password}.{post.picture}.{post.beNotified}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default SignUp;