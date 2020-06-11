import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
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
			.post('http://localhost:52944/api/Users', this.state)
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
                <div className="main">
                    <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                    <form onSubmit={this.submitHandler}
                    className="register-form"
                    id="register-form" >
                        <div className="form-group">
                        <label htmlFor="name">
                           <i className="zmdi zmdi-account material-icons-name" />
                        </label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">
                           <i className="zmdi zmdi-account material-icons-name" />
                        </label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">
                           <i className="zmdi zmdi-email" />
                        </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">
                           <i className="zmdi zmdi-email" />
                        </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Repeat your e-mail"
                                value={email}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">
                         <i className="zmdi zmdi-account material-icons-name" />
                        </label>
                            <input
                                type="text"
                                name="nickname"
                                placeholder="Nickname"
                                value={nickname}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="pass">
                        <i className="zmdi zmdi-lock" />
                        </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      I agree all statements in{" "}
                      <a href="terms" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <button
                     type="submit"
                      href="/home"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:3000/';
                        }}
                      
                    >
                      Register
                    </button>
                    <a 
                    href="/" 
                    className="signup-image-link"
                    type="submit"
                    >
                      I am already member
                    </a>
                  </div>
                    </form>
                </div>
                </div>
                </div>
                </div>
            )
        }
}

export default SignUpForm;