import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar_home  bg-secondary_1 p-2">
        <div className="container">
        <nav class="navbar navbar-expand-lg ">    
    <Link class="navbar-brand" to="/">START REACT</Link>
    <button class="navbar-toggler button_navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      MENU<span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="protfolo">PORTFOLO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="about">ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact">CONTACT</Link>
        </li>

      </ul>

    </div>
</nav>
        </div>
        </div>
    );
  }
}
