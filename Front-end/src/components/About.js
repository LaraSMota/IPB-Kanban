import React from "react";
import Navbar from './Navbar';

class About extends React.Component {
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
                      color: "#A5D5AB"
                    }}
                  >
                    About CardBe
                  </h1>
                  <p className="lead">
                    CardBe is a software designed for the subject 'Multimedia
                    Application Development', taught at Polytechnic Institute of
                    Bragança for a master degree in Information Systems. This
                    project was built in a collaboration of the students: Aline
                    Lopes, Lara Mota, Leonardo Costa and Lucas Maltauro under
                    the tutor of the Doctor Professor Paulo Alves.{" "}
                  </p>
                  <p
                    className="lead"
                    style={{
                      color: "#A5D5AB"
                    }}
                  >
                    Logo made by @spacegirl.ag
                  </p>
                  <div className="d-flex align-items-center">
                    <ul className="avatars"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
      </div>
    );
  }
}

export default About;
