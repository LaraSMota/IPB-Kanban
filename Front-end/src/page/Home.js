import React from "react";

class Home extends React.Component {
  render() {
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
                <a className="nav-link active" href="home">
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
                   href="team"
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
        <div className="main-container">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="page-header mb-4">
                  <div className="media">
                    <img
                      alt=""
                      src="assets\\img\\avatar-male-4.jpg"
                      className="avatar avatar-lg mt-1"
                    />
                    <div className="media-body ml-3">
                      <h1
                        className="mb-0"
                        style={{
                          color: "#D7E868"
                        }}
                      >
                        David Whittaker
                      </h1>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs nav-fill"
                  style={{
                    backgroundColor: "#393B39"
                  }}
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{
                        backgroundColor: "rgb(68, 68, 68)",
                        color: "#61B8A2"
                      }}
                      data-toggle="tab"
                      href="#teams"
                      role="tab"
                      aria-controls="teams"
                      aria-selected="true"
                    >
                      Teams
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      style={{
                        backgroundColor: "rgb(68, 68, 68)",
                        color: "#61B8A2"
                      }}
                      href="#projects"
                      role="tab"
                      aria-controls="projects"
                      aria-selected="false"
                    >
                      Boards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      style={{
                        backgroundColor: "rgb(68, 68, 68)",
                        color: "#61B8A2"
                      }}
                      href="#tasks"
                      role="tab"
                      aria-controls="tasks"
                      aria-selected="false"
                    >
                      Notifications
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="teams"
                    role="tabpanel"
                    data-filter-list="content-list-body"
                  >
                    <div className="row content-list-head">
                      <div className="col-auto">
                        <h3
                          style={{
                            color: "#D7E868"
                          }}
                        >
                          Teams
                        </h3>
                        <button
                          className="btn btn-round"
                          data-toggle="modal"
                          data-target="#team-add-modal"
                        >
                          <i
                            className="material-icons"
                            style={{
                              color: "#61B8A2"
                            }}
                          >
                            add
                          </i>
                        </button>
                      </div>
                      <form
                        className="col-md-auto"
                        style={{
                          color: "rgb(87, 90, 87)"
                        }}
                      >
                        <div className="input-group input-group-round">
                          <div
                            className="input-group-prepend"
                            style={{
                              backgroundColor: "#393b39"
                            }}
                          >
                            <span
                              className="input-group-text"
                              style={{
                                backgroundColor: "#393b39"
                              }}
                            >
                              <i
                                className="material-icons"
                                style={{
                                  color: "#61B8A2"
                                }}
                              >
                                filter_list
                              </i>
                            </span>
                          </div>
                          <input
                            type="search"
                            className="form-control filter-list-input"
                            style={{
                              color: "#61B8A2",
                              backgroundColor: "#393b39"
                            }}
                            placeholder="Filter teams"
                            aria-label="Filter teams"
                          />
                        </div>
                      </form>
                    </div>
                    {}
                    <div className="content-list-body row">
                      <div className="col-md-6">
                        <div className="card card-team">
                          <div className="card-body">
                            <div className="dropdown card-options">
                              <button
                                className="btn-options"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="a">
                                  Manage
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="a"
                                >
                                  Leave Team
                                </a>
                              </div>
                            </div>
                            <div className="card-title">
                              <a href="a">
                                <h5
                                  data-filter-by="text"
                                  style={{
                                    color: "#E8EFC3"
                                  }}
                                >
                                  Medium Rare
                                </h5>
                              </a>
                              <span>4 Boards, 6 Members</span>
                            </div>
                            <ul className="avatars">
                              <li>
                                <a href="a" data-toggle="tooltip" title="Kenny">
                                  <img
                                    alt="Kenny Tran"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-6.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="David">
                                  <img
                                    alt="David Whittaker"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Sally">
                                  <img
                                    alt="Sally Harper"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-3.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Kristina"
                                >
                                  <img
                                    alt="Kristina Van Der Stroem"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Claire"
                                >
                                  <img
                                    alt="Claire Connors"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-1.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Marcus"
                                >
                                  <img
                                    alt="Marcus Simmons"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-1.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-team">
                          <div className="card-body">
                            <div className="dropdown card-options">
                              <button
                                className="btn-options"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="a">
                                  Manage
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="a"
                                >
                                  Leave Team
                                </a>
                              </div>
                            </div>
                            <div className="card-title">
                              <a href="a">
                                <h5
                                  data-filter-by="text"
                                  style={{
                                    color: "#E8EFC3"
                                  }}
                                >
                                  Front-Enders
                                </h5>
                              </a>
                              <span>2 Boards, 3 Members</span>
                            </div>
                            <ul className="avatars">
                              <li>
                                <a href="a" data-toggle="tooltip" title="David">
                                  <img
                                    alt="David Whittaker"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Krishna"
                                >
                                  <img
                                    alt="Krishna Bajaj"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-6.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Peggy">
                                  <img
                                    alt="Peggy Brown"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-2.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-team">
                          <div className="card-body">
                            <div className="dropdown card-options">
                              <button
                                className="btn-options"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="a">
                                  Manage
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="a"
                                >
                                  Leave Team
                                </a>
                              </div>
                            </div>
                            <div className="card-title">
                              <a href="a">
                                <h5
                                  data-filter-by="text"
                                  style={{
                                    color: "#E8EFC3"
                                  }}
                                >
                                  Pipeline Leadership
                                </h5>
                              </a>
                              <span>4 Boards, 9 Members</span>
                            </div>
                            <ul className="avatars">
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Marcus"
                                >
                                  <img
                                    alt="Marcus Simmons"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-1.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Claire"
                                >
                                  <img
                                    alt="Claire Connors"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-1.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Harry">
                                  <img
                                    alt="Harry Xai"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-2.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Kristina"
                                >
                                  <img
                                    alt="Kristina Van Der Stroem"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Kenny">
                                  <img
                                    alt="Kenny Tran"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-6.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Sally">
                                  <img
                                    alt="Sally Harper"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-3.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="David">
                                  <img
                                    alt="David Whittaker"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Ravi">
                                  <img
                                    alt="Ravi Singh"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-3.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Masimba"
                                >
                                  <img
                                    alt="Masimba Sibanda"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-5.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-team">
                          <div className="card-body">
                            <div className="dropdown card-options">
                              <button
                                className="btn-options"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="a">
                                  Manage
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="a"
                                >
                                  Leave Team
                                </a>
                              </div>
                            </div>
                            <div className="card-title">
                              <a href="a">
                                <h5
                                  data-filter-by="text"
                                  style={{
                                    color: "#E8EFC3"
                                  }}
                                >
                                  User Experience
                                </h5>
                              </a>
                              <span>5 Boards, 4 Members</span>
                            </div>
                            <ul className="avatars">
                              <li>
                                <a href="a" data-toggle="tooltip" title="David">
                                  <img
                                    alt="David Whittaker"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Peggy">
                                  <img
                                    alt="Peggy Brown"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-2.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Kristina"
                                >
                                  <img
                                    alt="Kristina Van Der Stroem"
                                    className="avatar"
                                    src="assets\\img\\avatar-female-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="a" data-toggle="tooltip" title="Ravi">
                                  <img
                                    alt="Ravi Singh"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-3.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-team">
                          <div className="card-body">
                            <div className="dropdown card-options">
                              <button
                                className="btn-options"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="a">
                                  Manage
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="a"
                                >
                                  Leave Team
                                </a>
                              </div>
                            </div>
                            <div className="card-title">
                              <a href="a">
                                <h5
                                  data-filter-by="text"
                                  style={{
                                    color: "#E8EFC3"
                                  }}
                                >
                                  Founders
                                </h5>
                              </a>
                              <span> 3 Boards, 2 Members</span>
                            </div>
                            <ul className="avatars">
                              <li>
                                <a href="a" data-toggle="tooltip" title="David">
                                  <img
                                    alt="David Whittaker"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="a"
                                  data-toggle="tooltip"
                                  title="Marcus"
                                >
                                  <img
                                    alt="Marcus Simmons"
                                    className="avatar"
                                    src="assets\\img\\avatar-male-1.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="projects"
                    role="tabpanel"
                    data-filter-list="content-list-body"
                  >
                    <div className="content-list">
                      <div className="row content-list-head">
                        <div className="col-auto">
                          <h3
                            style={{
                              color: "#D7E868"
                            }}
                          >
                            Boards
                          </h3>
                        </div>
                        <form className="col-md-auto">
                          <div
                            className="input-group input-group-round"
                            style={{
                              backgroundColor: "#393B39"
                            }}
                          >
                            <div
                              className="input-group-prepend"
                              style={{
                                backgroundColor: "#393B39"
                              }}
                            >
                              <span
                                className="input-group-text"
                                style={{
                                  backgroundColor: "#393B39"
                                }}
                              >
                                <i
                                  className="material-icons"
                                  style={{
                                    color: "#61B8A2"
                                  }}
                                >
                                  filter_list
                                </i>
                              </span>
                            </div>
                            <input
                              type="search"
                              className="form-control filter-list-input"
                              style={{
                                color: "#61B8A2"
                              }}
                              placeholder="Filter projects"
                              aria-label="Filter Projects"
                            />
                          </div>
                        </form>
                      </div>
                      {}
                      <div className="content-list-body row">
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="project-dropdown-button-4"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="a">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="board">
                                  <h5
                                    data-filter-by="text"
                                    style={{
                                      color: "#E8EFC3"
                                    }}
                                  >
                                    Update Marketing Collateral
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="David"
                                  >
                                    <img
                                      alt="David Whittaker"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-4.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Masimba"
                                  >
                                    <img
                                      alt="Masimba Sibanda"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Krishna"
                                  >
                                    <img
                                      alt="Krishna Bajaj"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-6.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Harry"
                                  >
                                    <img
                                      alt="Harry Xai"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">0/5</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 12 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{
                                  width: "100%"
                                }}
                                aria-valuenow={8}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="project-dropdown-button-5"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="a">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="board">
                                  <h5
                                    data-filter-by="text"
                                    style={{
                                      color: "#E8EFC3"
                                    }}
                                  >
                                    Brand Concept & Design
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Ravi"
                                  >
                                    <img
                                      alt="Ravi Singh"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-3.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Masimba"
                                  >
                                    <img
                                      alt="Masimba Sibanda"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Peggy"
                                  >
                                    <img
                                      alt="Peggy Brown"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Marcus"
                                  >
                                    <img
                                      alt="Marcus Simmons"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Kerri-Anne"
                                  >
                                    <img
                                      alt="Kerri-Anne Banks"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">1/12</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 20 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="project-dropdown-button-6"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="a">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="board">
                                  <h5
                                    data-filter-by="text"
                                    style={{
                                      color: "#E8EFC3"
                                    }}
                                  >
                                    Company Getaway
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Kristina"
                                  >
                                    <img
                                      alt="Kristina Van Der Stroem"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-4.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">-/-</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Unscheduled
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {}
                    </div>
                    {}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tasks"
                    role="tabpanel"
                    data-filter-list="content-list-body"
                  >
                    <div className="row content-list-head">
                      <div className="col-auto">
                        <h3
                          style={{
                            color: "#D7E868"
                          }}
                        >
                          Notifications
                        </h3>
                      </div>
                      <form className="col-md-auto">
                        <div
                          className="input-group input-group-round"
                          style={{
                            backgroundColor: "#393B39"
                          }}
                        >
                          <div
                            className="input-group-prepend"
                            style={{
                              backgroundColor: "#393B39"
                            }}
                          >
                            <span
                              className="input-group-text"
                              style={{
                                backgroundColor: "#393B39"
                              }}
                            >
                              <i
                                className="material-icons"
                                style={{
                                  color: "#61B8A2"
                                }}
                              >
                                filter_list
                              </i>
                            </span>
                          </div>
                          <input
                            type="search"
                            className="form-control filter-list-input"
                            style={{
                              color: "#61B8A2"
                            }}
                            placeholder="Filter tasks"
                            aria-label="Filter Tasks"
                          />
                        </div>
                      </form>
                    </div>
                    {}
                    <div className="content-list-body row">
                      <div className="col-12">
                        <div className="card card-task">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{
                                width: "100%"
                              }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-title">
                              <a href="a">
                                <h6 data-filter-by="text">
                                  Client objective meeting
                                </h6>
                              </a>
                              <span className="text-small">Today</span>
                            </div>
                            <div className="card-meta">
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Kenny"
                                  >
                                    <img
                                      alt="Kenny Tran"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-6.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="David"
                                  >
                                    <img
                                      alt="David Whittaker"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-4.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Sally"
                                  >
                                    <img
                                      alt="Sally Harper"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-3.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Kristina"
                                  >
                                    <img
                                      alt="Kristina Van Der Stroem"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-4.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-1.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Marcus"
                                  >
                                    <img
                                      alt="Marcus Simmons"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-1.jpg"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="d-flex align-items-center">
                                <i className="material-icons">
                                  playlist_add_check
                                </i>
                                <span>3/4</span>
                              </div>
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="task-dropdown-button-1"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Mark as done
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="a"
                                  >
                                    Archive
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card card-task">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{
                                width: "100%"
                              }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-title">
                              <a href="a">
                                <h6 data-filter-by="text">
                                  Target market trend analysis
                                </h6>
                              </a>
                              <span className="text-small">5 days</span>
                            </div>
                            <div className="card-meta">
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Peggy"
                                  >
                                    <img
                                      alt="Peggy Brown"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-2.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="David"
                                  >
                                    <img
                                      alt="David Whittaker"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-4.jpg"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="d-flex align-items-center">
                                <i className="material-icons">
                                  playlist_add_check
                                </i>
                                <span>2/10</span>
                              </div>
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="task-dropdown-button-2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Mark as done
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="a"
                                  >
                                    Archive
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card card-task">
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: "100%"
                              }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-title">
                              <a href="a">
                                <h6 data-filter-by="text">
                                  Assemble Outcomes Report for client
                                </h6>
                              </a>
                              <span className="text-small">7 days</span>
                            </div>
                            <div className="card-meta">
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Marcus"
                                  >
                                    <img
                                      alt="Marcus Simmons"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-1.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets\\img\\avatar-female-1.jpg"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="a"
                                    data-toggle="tooltip"
                                    title="David"
                                  >
                                    <img
                                      alt="David Whittaker"
                                      className="avatar"
                                      src="assets\\img\\avatar-male-4.jpg"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="d-flex align-items-center">
                                <i className="material-icons">
                                  playlist_add_check
                                </i>
                                <span>0/6</span>
                              </div>
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  style={{
                                    backgroundColor: "#393B39"
                                  }}
                                  type="button"
                                  id="task-dropdown-button-3"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="a">
                                    Mark as done
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="a"
                                  >
                                    Archive
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                  </div>
                  {}
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
                                    <i className="material-icons">
                                      filter_list
                                    </i>
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
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
                        <button
                          
                          className="btn btn-primary"
                          type="submit"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
