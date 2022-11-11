import React, { Component } from "react";
import './home.css'
export default class Home extends Component {
    render() {
    return (
    <>
    <div className="home">
        <div className="container">
            <img src="http://routeegypt.com/start-react/assets/img/avataaars.svg" alt="" />
            <div className="text">
                <h1>START REACT</h1>
            </div>
            <div className="line-start">
            <div className="line"></div>
            <div className="start"><i class="fas fa-star"></i></div>
            <div className="line"></div>
            </div>
            <div className="paragraph">
            Graphic Artist - Web Designer - Illustrator
            </div>
        </div>
    </div>
    </>
    );
}
}
