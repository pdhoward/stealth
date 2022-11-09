import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="container">
      <div className="hero row">
        <div className="hero-left col-md-6 col-12 mx-auto mb-4">
          <div className="hero-content-wrapper">
            <h6 className="hero-sub">Artificial intelligence & robotics</h6>
            <h2 className="hero-heading" styleName="font-size: 3vw">
              Get closer look how business develop in AI data analysis
            </h2>
            <p className="hero-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum consectetur iure reiciendis unde ipsa similique possimus.
            </p>
            <a href="#" className="btn header-btn hero-btn px-5 btn-dark">
              Discover more
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
