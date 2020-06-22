import React, { Component } from 'react';
import axios from 'axios';


class AccountSettingsForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
            email: '',
            nickname: '',
			password: '',
			image: 'http://example.com/initialimage.jpg'
		}
	}

	

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:52719/api/Users', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	updateHandle = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.put('http://localhost:52944/api/Users/10', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}

	deleteHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.delete('http://localhost:52944/api/Users/10', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}


	render() {
		const {  firstName, lastName, email, nickname, password } = this.state
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
					  <a className="dropdown-item" href="create-board">
						Board
					  </a>
					  <a
					   className="dropdown-item" 
					   href="create-board"
					  >
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
						  href="logout"
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
					<button  className="btn btn-primary" type="submit">
					  Done
					</button>
				  </div>
				</div>
			  </div>
			</form>
			<div className="main-container">
			  <div className="container-fluid">
				<div className="row justify-content-center mt-5">
				  <div className="col-lg-3 mb-3">
					<ul
					  className="nav nav-tabs flex-lg-column"
					  role="tablist"
					  style={{
						backgroundColor: "black"
					  }}
					>
					  <li className="nav-item">
						<a
						  className="nav-link active"
						  id="profile-tab"
						  data-toggle="tab"
						  href="#profile"
						  role="tab"
						  aria-controls="profile"
						  aria-selected="true"
						  style={{
							color: "#61B8A2"
						  }}
						>
						  Your Profile
						</a>
					  </li>
					  <li className="nav-item">
						<a
						  className="nav-link"
						  id="notifications-tab"
						  data-toggle="tab"
						  href="#notifications"
						  role="tab"
						  aria-controls="notifications"
						  aria-selected="false"
						  style={{
							color: "#61B8A2"
						  }}
						>
						  Notifications
						</a>
					  </li>
					</ul>
				  </div>
				  <div className="col-xl-8 col-lg-9">
					<div className="card"
					  style={{
						backgroundColor: "#393B39",
						borderColor: "#61B8A2"
					  }}>
					  <div className="card-body">
						<div className="tab-content">
						  <div
							className="tab-pane fade show active"
							role="tabpanel"
							id="profile"
						  >
							<div className="media mb-4">
							  <img
								alt=""
								src="assets\\img\\avatar-male-4.jpg"
								className="avatar avatar-lg"
							  />
							  <div className="media-body ml-3">
								<div className="custom-file custom-file-naked d-block mb-1">
								  <input
									type="file"
									className="custom-file-input d-none"
									id="avatar-file"
								  />
								  <label
									className="custom-file-label position-relative"
									htmlFor="avatar-file"
								  >
									<span
									  className="btn btn-primary"
									  style={{
										backgroundColor: "#A5D5AB",
										color: "black"
									  }}
									>
									  Upload avatar
									</span>
								  </label>
								</div>
								<small
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  For best results, use an image at least 256px by
								  256px in either .jpg or .png format
								</small>
							  </div>
							</div>
							{}
							<form onSubmit={this.updateHandle}>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  First Name
								</label>
								<div className="col">
								  <input
									type="text"
								    name="firstName"
									placeholder="First Name"
									value={firstName}
									onChange={this.changeHandler}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  Last Name
								</label>
								<div className="col">
								  <input
									 type="text"
									 name="lastName"
									 placeholder="Last Name"
									 value={lastName}
									 onChange={this.changeHandler}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  E-mail
								</label>
								<div className="col">
								  <input
                                type="text"
                                name="email"
                                placeholder="Your e-mail"
                                value={email}
                                onChange={this.changeHandler}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  Nickname
								</label>
								<div className="col">
								  <input
                                type="text"
                                name="nickname"
                                placeholder="Nickname"
                                value={nickname}
                                onChange={this.changeHandler}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  Password
								</label>
								<div className="col">
								  <input
									type="password"
									name="password"
									placeholder="Password"
									value={password}
									onChange={this.changeHandler}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="row justify-content-end">
								<button
								  className="btn btn-primary"
								  type="submit"
								  style={{
									backgroundColor: "#A5D5AB",
									color: "#393B39"
								  }}
								>
								  Save
								</button>
							  </div>
							 </form>
							 <form onSubmit={this.deleteHandler}>
							  <button
							      onChange={this.changeHandler}
								  type="submit"
								  className="btn btn-primary"
								  style={{
									backgroundColor: "#FA8072",
									color: "#000000"
								  }}
								>
								  Delete Account
								</button>
							  </form>
						  </div>
						  <div
							className="tab-pane fade"
							role="tabpanel"
							id="password"
						  >
							<form onSubmit={this.updateHandle}>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  Current Password
								</label>
								<div className="col">
								  <input
									type="password"
									placeholder="Enter your current password"
									name="password-current"
									className="form-control"
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  New Password
								</label>
								<div className="col">
								  <input
									type="password"
									placeholder="New password"
									className="form-control"
									onChange={this.changeHandler}
									value={password}
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								  <small
									style={{
									  color: "#E8EFC3"
									}}
								  >
									Password must be at least 8 characters long
								  </small>
								</div>
							  </div>
							  <div className="form-group row align-items-center">
								<label
								  className="col-3"
								  style={{
									color: "#E8EFC3"
								  }}
								>
								  Confirm Password
								</label>
								<div className="col">
								  <input
									type="password"
									placeholder="Confirm password"
									name="password-confirm"
									className="form-control"
									style={{
									  backgroundColor: "#393B39",
									  color: "#D7E868"
									}}
								  />
								</div>
							  </div>
							  <div className="row justify-content-end">
								<button
								  type="submit"
								  className="btn btn-primary"
								  style={{
									backgroundColor: "#A5D5AB",
									color: "#393B39"
								  }}
								>
								  Change Password
								</button>
							  </div>
							</form>
						  </div>
						  <div
							className="tab-pane fade"
							role="tabpanel"
							id="notifications"
						  >
							<form>
							  <div className="form-group">
								<div className="custom-control custom-checkbox custom-checkbox-switch">
								  <input
									type="checkbox"
									className="custom-control-input"
									id="notify-1"
									defaultChecked
								  />
								  <label
									className="custom-control-label"
									htmlFor="notify-1"
									style={{
									  color: "#A5D5AB"
									}}
								  >
									Active Notifications
								  </label>
								</div>
							  </div>
							</form>
						  </div>
						  <div
							className="tab-pane fade"
							role="tabpanel"
							id="billing"
						  >
							<form>
							  <h6>Plan Details</h6>
							  <div className="card text-center">
								<div className="card-body">
								  <div className="row">
									<div className="col">
									  <div className="mb-4">
										<h6>Free</h6>
										<h5 className="display-4 d-block mb-2 font-weight-normal">
										  $0
										</h5>
										<span className="text-muted text-small">
										  Per User / Per Month
										</span>
									  </div>
									  <ul className="list-unstyled">
										<li>Unlimited projects</li>
										<li>1 team</li>
										<li>4 team members</li>
									  </ul>
									  <div className="custom-control custom-radio d-inline-block">
										<input
										  type="radio"
										  id="plan-radio-1"
										  name="customRadio"
										  className="custom-control-input"
										/>
										<label
										  className="custom-control-label"
										  htmlFor="plan-radio-1"
										/>
									  </div>
									</div>
									<div className="col">
									  <div className="mb-4">
										<h6>Pro</h6>
										<h5 className="display-4 d-block mb-2 font-weight-normal">
										  $10
										</h5>
										<span className="text-muted text-small">
										  Per User / Per Month
										</span>
									  </div>
									  <ul className="list-unstyled">
										<li>Unlimited projects</li>
										<li>Unlmited teams</li>
										<li>Unlimited team members</li>
									  </ul>
									  <div className="custom-control custom-radio d-inline-block">
										<input
										  type="radio"
										  id="plan-radio-2"
										  name="customRadio"
										  className="custom-control-input"
										  defaultChecked
										/>
										<label
										  className="custom-control-label"
										  htmlFor="plan-radio-2"
										/>
									  </div>
									</div>
								  </div>
								</div>
							  </div>
							</form>
							<form className="mt-4">
							  <h6>Payment Method</h6>
							  <div className="card">
								<div className="card-body">
								  <div className="row align-items-center">
									<div className="col-auto">
									  <div className="custom-control custom-radio d-inline-block">
										<input
										  type="radio"
										  id="method-radio-1"
										  name="payment-method"
										  className="custom-control-input"
										  defaultChecked
										/>
										<label
										  className="custom-control-label"
										  htmlFor="method-radio-1"
										/>
									  </div>
									</div>
									<div className="col-auto">
									  <img
										alt=""
										src="assets\\img\\logo-payment-visa.svg"
										className="avatar rounded-0"
									  />
									</div>
									<div className="col d-flex align-items-center">
									  <span>•••• •••• •••• 8372</span>
									  <small className="ml-2">Exp: 06/21</small>
									</div>
									<div className="col-auto">
									  <button className="btn btn-sm btn-danger">
										Remove Card
									  </button>
									</div>
								  </div>
								</div>
							  </div>
							  <div className="card">
								<div className="card-body">
								  <div className="row align-items-center">
									<div className="col-auto">
									  <div className="custom-control custom-radio d-inline-block">
										<input
										  type="radio"
										  id="method-radio-2"
										  name="payment-method"
										  className="custom-control-input"
										/>
										<label
										  className="custom-control-label"
										  htmlFor="method-radio-2"
										/>
									  </div>
									</div>
									<div className="col-auto">
									  <img
										alt=""
										src="assets\\img\\logo-payment-amex.svg"
										className="avatar rounded-0"
									  />
									</div>
									<div className="col d-flex align-items-center">
									  <span>•••• •••• •••• 9918</span>
									  <small className="ml-2">Exp: 02/20</small>
									</div>
									<div className="col-auto">
									  <button className="btn btn-sm btn-danger">
										Remove Card
									  </button>
									</div>
								  </div>
								</div>
							  </div>
							  <div className="card">
								<div className="card-body">
								  <div className="row align-items-center">
									<div className="col-auto">
									  <div className="custom-control custom-radio d-inline-block">
										<input
										  type="radio"
										  id="method-radio-3"
										  name="payment-method"
										  className="custom-control-input"
										/>
										<label
										  className="custom-control-label"
										  htmlFor="method-radio-3"
										/>
									  </div>
									</div>
									<div className="col-auto">
									  <img
										alt=""
										src="assets\\img\\logo-payment-paypal.svg"
										className="avatar rounded-0"
									  />
									</div>
									<div className="col d-flex align-items-center">
									  <span>david.whittaker@pipeline.io</span>
									</div>
									<div className="col-auto">
									  <button className="btn btn-sm btn-primary">
										Manage account
									  </button>
									</div>
								  </div>
								</div>
							  </div>
							</form>
						  </div>
						  <div
							className="tab-pane fade"
							role="tabpanel"
							id="integrations"
						  >
							<div className="card">
							  <div className="card-body">
								<div className="row align-items-center">
								  <div className="col">
									<div className="media align-items-center">
									  <img
										alt=""
										src="assets\\img\\logo-integration-slack.svg"
									  />
									  <div className="media-body ml-2">
										<span className="h6 mb-0 d-block">
										  Slack
										</span>
										<span className="text-small text-muted">
										  Permissions: Read, Write, Comment
										</span>
									  </div>
									</div>
								  </div>
								  <div className="col-auto">
									<button className="btn btn-sm btn-danger">
									  Revoke
									</button>
								  </div>
								</div>
							  </div>
							</div>
							<div className="card">
							  <div className="card-body">
								<div className="row align-items-center">
								  <div className="col">
									<div className="media align-items-center">
									  <img
										alt=""
										src="assets\\img\\logo-integration-dropbox.svg"
									  />
									  <div className="media-body ml-2">
										<span className="h6 mb-0 d-block">
										  Dropbox
										</span>
										<span className="text-small text-muted">
										  Permissions: Read, Write, Upload
										</span>
									  </div>
									</div>
								  </div>
								  <div className="col-auto">
									<button className="btn btn-sm btn-danger">
									  Revoke
									</button>
								  </div>
								</div>
							  </div>
							</div>
							<div className="card">
							  <div className="card-body">
								<div className="row align-items-center">
								  <div className="col">
									<div className="media align-items-center">
									  <img
										alt=""
										src="assets\\img\\logo-integration-drive.svg"
									  />
									  <div className="media-body ml-2">
										<span className="h6 mb-0 d-block">
										  Google Drive
										</span>
										<span className="text-small text-muted">
										  Permissions: Read, Write
										</span>
									  </div>
									</div>
								  </div>
								  <div className="col-auto">
									<button className="btn btn-sm btn-danger">
									  Revoke
									</button>
								  </div>
								</div>
							  </div>
							</div>
							<div className="card">
							  <div className="card-body">
								<div className="row align-items-center">
								  <div className="col">
									<div className="media align-items-center">
									  <img
										alt=""
										src="assets\\img\\logo-integration-trello.svg"
									  />
									  <div className="media-body ml-2">
										<span className="h6 mb-0 d-block">
										  Trello
										</span>
										<span className="text-small text-muted">
										  Permissions: Read, Write
										</span>
									  </div>
									</div>
								  </div>
								  <div className="col-auto">
									<button className="btn btn-sm btn-danger">
									  Revoke
									</button>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		);
	  }
}

export default AccountSettingsForm;