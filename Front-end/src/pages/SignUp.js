import React from "react";
import axios from "axios";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: [],
      loading: true,
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  onChange(e) {
     this.setState({[e.target.name]: e.target.value})
 } 


 handleSubmit(e) {
  e.preventDefault();
  const data = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    nickname: this.state.nickname,
    password: this.state.password
  };
  axios.post('http://localhost:5000/api/Users', { data })
  .then(res => {
    console.log(data);
  })
 }
  render() {
    return (
      <div className="main">
        {}
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                       id='firstName' 
                       name='First Name'
                       value={this.state.firstName}
                       onChange={this.onChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      id='lastName' 
                      name='Last Name'
                      value={this.state.lastName}
                      onChange={this.onChange}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      id='email' 
                      name='Email'
                      value={this.state.email}
                      onChange={this.onChange}
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                     id='email' 
                     name='Email'
                     value={this.state.email}
                     onChange={this.onChange}
                     placeholder="Repeat your e-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      id='nickname' 
                      name='Nickname'
                      value={this.state.nickname}
                      onChange={this.onChange}
                      placeholder="Nickname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      id='password' 
                      name='Password'
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="Password"
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
                    <a
                     type="submit"
                     onClick={(e) => this.handleSubmit }
                      href="home"
                      name="signin"
                      id="signin"
                      className="form-submit"
                    >
                      Register
                    </a>
                    <a 
                    href="signin" 
                    className="signup-image-link"
                    type="submit"
                    onClick={(e) => this.handleSubmit }
                    >
                      I am already member
                    </a>
                  </div>
                </form>
              </div>
              {}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
