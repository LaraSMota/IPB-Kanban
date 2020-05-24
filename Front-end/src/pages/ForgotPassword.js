import React from "react";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="layout layout-nav-top">
        <div className="navbar navbar-expand-lg sticky-top">
          <a className="navbar-brand" href="/">
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
                <a className="nav-link" href="/">
                  Return
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-container fullscreen">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="text-center">
                  <h1
                    className="h2"
                    style={{
                      color: "#E8EFC3"
                    }}
                  >
                    Forgot password 😫
                  </h1>
                  <p className="lead">Enter your email address to reset</p>
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        name="forgot-password-email"
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-block btn-primary"
                     
                      type="submit"
                      style={{
                        color: "#393B39",
                        backgroundColor: "#E8EFC3"
                      }}
                    >
                      <center>Send</center>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
