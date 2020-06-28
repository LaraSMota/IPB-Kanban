import React from "react";
import Navbar from './Navbar';

class ErroReport extends React.Component {
  render() {
    return (
      <div className="layout layout-nav-top">
          <Navbar/>
        <div className="main-container">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                <div className="page-header">
                  <h1
                    style={{
                      color: "#d7e868"
                    }}
                  >
                    ERROR REPORT
                  </h1>
                  <h4
                    style={{
                      color: "#E8EFC3"
                    }}
                  >
                    If you have any problem, please contact us and we will take
                    a look in your situation:
                  </h4>
                  <p className="lead"                     style={{
                      color: "#A5D5AB"
                    }}>Email: cardbe@email.com</p>
                  <div className="d-flex align-items-center">
                    <ul className="avatars"></ul>
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

export default ErroReport;
