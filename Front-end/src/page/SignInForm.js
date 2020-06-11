import React, { Component } from 'react';
import axios from 'axios';

class SignInForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
            email: '',
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
			.get('http://localhost:52944/api/Users', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
        const {   email, password } = this.state
        return (
            <div className="main">
            {}
            <section className="sign-in">
              <div className="container">
                <div className="signin-content">
                  <div className="signin-form">
                    <center>
                      <img
                        alt="Logo"
                        src="assets\\img\\cardBe.png"
                        width={200}
                        height={100}
                      />
                    </center>
                    <h3 className="form-subtitle"style={{
                                color: "#A5D5AB"
                              }}>Get it real!</h3>
                    <form onSubmit={this.submitHandler}
                    className="register-form"
                    id="register-form" >
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
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <button
                     type="submit"
                      href="home"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:3000/home';
                        }}
                    >
                      Login
                    </button>
                    <a href="forgot-password" className="signup-image-link">
                  Forgot Password?
                </a>
                <div className="social-login">
                  <span className="social-label"
                  style={{
                    color: "#A5D5AB"
                  }}>New here?</span>
                  <a href="signup" className="signup-image-link">
                    Create an account
                  </a>
                </div>
                  </div>
                    </form>
                </div>
                </div>
                </div>

                </section>
                </div>
                
            )
        }
}

export default SignInForm;