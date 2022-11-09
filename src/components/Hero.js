import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="container">
      <div className="hero row">
        <div className="hero-left col-md-6 col-12 mx-auto mb-4">
          <div className="hero-content-wrapper">
            <h6 className="hero-sub">AI meets modern </h6>
            <h2 className="hero-heading" styleName="font-size: 3vw">
              Stealth Mode
            </h2>
            <p className="hero-content">
              We are on a mission to bring intelligent functions to the legacy modernization
              process
            </p>
            <a href="#" className="btn header-btn hero-btn px-5 btn-dark">
              Join us
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="hero-right col-md-6 col-12 mx-auto mb-4">
          <img src={props.hero} alt="" className="img-fluid hero-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
