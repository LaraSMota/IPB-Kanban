import React, { Component } from 'react';
import axios from 'axios';

class AccountSettings extends Component {
	constructor(props) {
		super(props)

		this.state = {
                posts: [],
                errorMsg: ''
                    }
	}

	componentDidMount() {
		axios
			.post('http://localhost:52719/api/Users/10')
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
					? posts.map(post => <div key={post.userid}>{post.firstName}.{post.lastName}.{post.email}.{post.nickname}.{post.password}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default AccountSettings;