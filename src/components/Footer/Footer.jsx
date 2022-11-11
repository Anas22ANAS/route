import React, { Component } from "react";
import './footer.css'

export default class Footer extends Component {
    state = {
        new1: new Date().getFullYear()
    }

  render() {

    return (
        <>
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12 p-5 ">
                <h4>LOCATION</h4>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
              <div className="col-lg-4 col-sm-12 p-5">
                <h4>AROUND THE WEB</h4>
                <a class="btn btn-outline-light btn-social  mx-1" href="/#"> <i class="fab fa-fw fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="/#">  <i class="fab fa-fw fa-twitter"></i> </a>
                <a class="btn btn-outline-light btn-social mx-1" href="/#"> <i class="fab fa-fw fa-linkedin-in"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="/#"> <i class="fab fa-fw fa-dribbble"></i> </a>
              </div>
              <div className="col-lg-4 col-sm-12 p-5">
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
            <div className="contaner py-4"></div>
            <p>Copyright © Your Website {this.state.new1}</p>
        </div>
        </>
    );
  }
}
