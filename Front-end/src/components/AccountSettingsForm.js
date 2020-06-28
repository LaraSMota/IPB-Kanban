import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UploadImage from './UploadImage';


class AccountSettingsForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
            email: '',
            nickname: '',
			password: ''
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
              <Navbar/>
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
								<UploadImage/>
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