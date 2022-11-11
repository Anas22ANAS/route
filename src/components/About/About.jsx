import React, { Component } from "react";
import './about.css'

export default class About extends Component {
  render() {
    return (
        <>
        <div className="about">
            <div className="text-about">
            <h1>ABOUT</h1>
            </div>
            <div className="line-start">
            <div className="line"></div>
            <div className="start"><i class="fas fa-star"></i></div>
            <div className="line"></div>
            </div>
            <div className="text-p">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
        </>
    );
  }
}
