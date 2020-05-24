import React from "react";

class SignIn extends React.Component {
  render() {
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
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
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
                    <a
                      href="home"
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                    >
                      Log in
                    </a>
                  </div>
                </form>
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignIn;
