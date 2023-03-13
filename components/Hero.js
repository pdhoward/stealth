import React from "react";
import Image from 'next/image'

function Hero() {
  return (
    <div className="container">
      <div className="hero row">
        <div className="hero-left col-md-6 col-12 mx-auto mb-4">
          <div className="hero-content-wrapper">
            <h6 className="hero-sub">AI meets modern </h6>
            <h2 className="hero-heading font-size: 3vw" >
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
          <Image className="img-fluid hero-img" src="/hero-ai.png" alt="hero" width="64" height="64" />          
        </div>
      </div>
    </div>
  );
}

export default Hero;
