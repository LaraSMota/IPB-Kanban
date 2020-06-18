import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

import img1 from '../img/florbranca.jpg'
import img2 from '../img/frutas.jpg'
import img3 from '../img/palmeira2.jpg'
import img4 from '../img/rosas.jpg'

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
			<div className="layout layout-nav-top">
				<div className="navbar navbar-expand-lg sticky-top">
					<a className="navbar-brand" href="home">
						<img
							alt="Logo"
							src="assets\\img\\cardBe.png"
							width={100}
							height={30}
						/>
					</a>
					<div
						className="collapse navbar-collapse justify-content-between"
						id="navbar-collapse"
						style={{
							borderColor: "#61B8A2",
							backgroundColor: "#393B39"
						}}
					>
						<ul className="navbar-nav">
							<li className="nav nav-fill" role="tablist">
								<a className="nav-link" href="home">
									Home
					</a>
								<a className="nav-link" href="error-report">
									Error Report
					</a>
								<a className="nav-link" href="about">
									About
					</a>
							</li>
						</ul>
						<div className="d-lg-flex align-items-center">
							<form className="form-inline my-lg-0 my-2">
								<div className="input-group input-group-dark input-group-round">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i
												className="material-icons"
												style={{
													color: "#61B8A2"
												}}
											>
												search
						  </i>
										</span>
									</div>
									<input
										type="search"
										className="form-control form-control-dark"
										placeholder="Search"
										aria-label="Search app"
										style={{
											color: "#61B8A2"
										}}
									/>
								</div>
							</form>
							<div
								className="dropdown mx-lg-2"
								style={{
									color: "#61B8A2"
								}}
							>
								<button
									className="btn btn-primary btn-block dropdown-toggle"
									type="button"
									id="newContentButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									style={{
										backgroundColor: "#393B39",
										color: "#61B8A2"
									}}
								>
									Add New
					</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="create-board.html">
										Board
					  </a>
									<a className="dropdown-item" href="create-board.html">
										Team
					                </a>
								</div>
							</div>
							<div className="d-none d-lg-block">
								<div className="dropdown">
									<a
										href="account-settings"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<img
											alt=""
											src="assets\\img\\avatar-male-4.jpg"
											className="avatar"
										/>
									</a>
									<div className="dropdown-menu dropdown-menu-right">
										<a href="account-settings" className="dropdown-item">
											Account Settings
						</a>
										<a
											href="/"
											className="dropdown-item"
											style={{
												color: "rgb(219, 41, 41)"
											}}
										>
											Log Out
						</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<form
					className="modal fade"
					id="team-add-modal"
					tabIndex={-1}
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div
								className="modal-header"
								style={{
									backgroundColor: "#393B39"
								}}
							>
								<h5
									className="modal-title"
									style={{
										backgroundColor: "#393B39"
									}}
								>
									New Team
					</h5>
								<button
									type="button"
									className="close btn btn-round"
									data-dismiss="modal"
									aria-label="Close"
								>
									<i className="material-icons">close</i>
								</button>
							</div>
							{}
							<ul className="nav nav-tabs nav-fill" role="tablist"></ul>
							<div className="modal-body">
								<div className="tab-content">
									<div
										className="tab-pane fade show active"
										id="team-add-details"
										role="tabpanel"
									>
										<div className="form-group row align-items-center">
											<label
												className="col-3"
												style={{
													color: "black"
												}}
											>
												Title
						  </label>
											<input
												value={this.state.title} onChange={this.handleInputChange}
												className="form-control col"
												type="text"
												placeholder="Team name"
												name="team-name"
												style={{
													backgroundColor: "white"
												}}
											/>
										</div>
										<div
											className="users-manage"
											data-filter-list="form-group-users"
										>
											<div className="mb-3">
												<ul className="avatars text-center">
													<li>
														<img
															alt="Claire Connors"
															src="assets\\img\\avatar-female-1.jpg"
															className="avatar"
															data-toggle="tooltip"
															data-title="Claire Connors"
														/>
													</li>
													<li>
														<img
															alt="Marcus Simmons"
															src="assets\\img\\avatar-male-1.jpg"
															className="avatar"
															data-toggle="tooltip"
															data-title="Marcus Simmons"
														/>
													</li>
													<li>
														<img
															alt="Peggy Brown"
															src="assets\\img\\avatar-female-2.jpg"
															className="avatar"
															data-toggle="tooltip"
															data-title="Peggy Brown"
														/>
													</li>
													<li>
														<img
															alt="Harry Xai"
															src="assets\\img\\avatar-male-2.jpg"
															className="avatar"
															data-toggle="tooltip"
															data-title="Harry Xai"
														/>
													</li>
												</ul>
											</div>
											<div className="input-group input-group-round">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="material-icons">filter_list</i>
													</span>
												</div>
												<input
													type="search"
													className="form-control filter-list-input"
													style={{
														color: "#61B8A2"
													}}
													placeholder="Filter members"
													aria-label="Filter Members"
												/>
											</div>
											<div className="form-group-users">
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-1"
														defaultChecked
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-1"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Claire Connors"
																src="assets\\img\\avatar-female-1.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Claire Connors
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-2"
														defaultChecked
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-2"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Marcus Simmons"
																src="assets\\img\\avatar-male-1.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Marcus Simmons
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-3"
														defaultChecked
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-3"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Peggy Brown"
																src="assets\\img\\avatar-female-2.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Peggy Brown
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-4"
														defaultChecked
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-4"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Harry Xai"
																src="assets\\img\\avatar-male-2.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Harry Xai
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-5"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-5"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Sally Harper"
																src="assets\\img\\avatar-female-3.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Sally Harper
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-6"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-6"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Ravi Singh"
																src="assets\\img\\avatar-male-3.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Ravi Singh
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-7"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-7"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Kristina Van Der Stroem"
																src="assets\\img\\avatar-female-4.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Kristina Van Der Stroem
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-8"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-8"
													>
														<span className="d-flex align-items-center">
															<img
																alt="David Whittaker"
																src="assets\\img\\avatar-male-4.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																David Whittaker
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-9"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-9"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Kerri-Anne Banks"
																src="assets\\img\\avatar-female-5.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Kerri-Anne Banks
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-10"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-10"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Masimba Sibanda"
																src="assets\\img\\avatar-male-5.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Masimba Sibanda
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-11"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-11"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Krishna Bajaj"
																src="assets\\img\\avatar-female-6.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Krishna Bajaj
								  </span>
														</span>
													</label>
												</div>
												<div className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
														id="user-manage-12"
													/>
													<label
														className="custom-control-label"
														htmlFor="user-manage-12"
													>
														<span className="d-flex align-items-center">
															<img
																alt="Kenny Tran"
																src="assets\\img\\avatar-male-6.jpg"
																className="avatar mr-2"
															/>
															<span className="h6 mb-0" data-filter-by="text">
																Kenny Tran
								  </span>
														</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{}
							<div className="modal-footer">
								<button className="btn btn-primary" type="submit">
									Done
					</button>
							</div>
						</div>
					</div>
				</form>
				<div>
					<form onSubmit={this.submitHandler}>
						<div className="main-container">
							<div className="container-fluid">
								<div className="row justify-content-center">
									<div className="col-xl-10 col-lg-11">
										<div className="form-group">

									<Form.Group controlId="form.title">
									         <p
												style={{
													color: "#D7E868"
												}}
											>TITLE
									      </p>
											<Form.Control 
											    type="text"
												name="title"
												value={title}
												onChange={this.changeHandler}
												className="form-control"
												rows={4}
												style={{
													backgroundColor: "#393B39",
													color: "#D7E868"}} />
										</Form.Group>
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
			</div>
		)
	}
}

export default CreateBoardForm;