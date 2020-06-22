import React, { Component } from 'react';
import axios from 'axios';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import Navbar from '../Navbar/index';

import img1 from '../../img/florbranca.jpg';
import img2 from '../../img/frutas.jpg';
import img3 from '../../img/palmeira2.jpg';
import img4 from '../../img/rosas.jpg';

const imageList = [img1, img2, img3, img4]

class CreateBoardForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			background: '',
			image: null
		}
		this.onPick = this.onPick.bind(this)
	}

	onPick(image) {
		this.setState({image})
	  }

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:52719/api/Boards', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error.response) 
			})
	}

	deleteHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.delete('http://localhost:52719/api/Boards', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}

	render() {
		const { title, description } = this.state
		return (
			<div>
			    <Navbar/>
					<form onSubmit={this.submitHandler}>
						<div className="main-container">
							<div className="container-fluid">
								<div className="row justify-content-center">
									<div className="col-xl-10 col-lg-11">
									
										<div className="form-group">
											<p
												style={{
													color: "#D7E868"
												}}
											>TITLE
									</p>
								    <input
									type="text"
								    name="title"
									value={title}
									onChange={this.changeHandler}
									className="form-control"
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								      </div>
										<div className="form-group">
											<p
												style={{
													color: "#D7E868"
												}}
											>DESCRIPTION
									</p>
											<textarea
												type="text"
												name="description"
												value={description}
												onChange={this.changeHandler}
												className="form-control"
												rows={4}
												style={{
													backgroundColor: "#393B39",
													color: "#D7E868"
												}}
											/>
										</div>
										<div className="form-group">
											<p style={{color: "#D7E868"}}>BACKGROUND</p>
											<div>
															<ImagePicker 
															images={imageList.map((image, i) => ({src: image, value: i}))}
															onPick={this.onPick}
															/>
															
														</div>
											<div className="form-group form-button">
											<button type="submit" style={{backgroundColor: "#A5D5AB"}} onClick={() => console.log(this.state.image)}>CREATE</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							</div>
				    </form>
			   </div>
			
		)
	}
}

export default CreateBoardForm;