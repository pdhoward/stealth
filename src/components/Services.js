import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./Services.css";

function Services(props) {
  return (
    <div>
      <section className="services-provided py-5" loading="lazy">
        <div className="container">
          <div className="mx-auto service-header">
            <p className="subtitle text-center">Services we provide</p>
            <h2 className="title text-center">
              Our purpose is to deliver excellence in service and execution
            </h2>
          </div>
          <OwlCarousel className="owl-theme" loop margin={10}>
            <div className="service-card col-12 mx-auto">
              <i className="fa fa-plug" aria-hidden="true"></i>
              <h4 className="service-title">Robotic Automation</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                officiis incidunt molestias laudantium unde minima eius commodi
                necessitatibus error.
              </p>
              <a href="#" className="service-link">
                Learn more
              </a>
            </div>

            <div className="service-card col-12 mx-auto">
              <i className="fa fa-barcode" aria-hidden="true"></i>
              <h4 className="service-title">Predictive Analysis</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                officiis incidunt molestias laudantium unde minima eius commodi
                necessitatibus error.
              </p>
              <a href="#" className="service-link">
                Learn more
              </a>
            </div>

            <div className="service-card col-12 mx-auto">
              <i className="fa fa-signal" aria-hidden="true"></i>
              <h4 className="service-title">Machine Learning</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                officiis incidunt molestias laudantium unde minima eius commodi
                necessitatibus error.
              </p>
              <a href="#" className="service-link">
                Learn more
              </a>
            </div>

            <div className="service-card col-12 mx-auto">
              <i className="fa fa-signal" aria-hidden="true"></i>
              <h4 className="service-title">Robotic Mechanism</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                officiis incidunt molestias laudantium unde minima eius commodi
                necessitatibus error.
              </p>
              <a href="#" className="service-link">
                Learn more
              </a>
            </div>

            <div className="service-card col-12 mx-auto">
              <i className="fa fa-signal" aria-hidden="true"></i>
              <h4 className="service-title">Smart Robotics</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                officiis incidunt molestias laudantium unde minima eius commodi
                necessitatibus error.
              </p>
              <a href="#" className="service-link">
                Learn more
              </a>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default Services;
