import React from 'react';
// TO DO

export default function Navbar () {
    return (
      <div>
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
                  <a className="nav-link" href="Home">
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
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="create-board">
                      Board
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
                        src="assets\\img\\user.png"
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
          </div>
      </div>

    );
  }

