import React from "react";
import "./CaseStudy.css";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image1 from "../assets/images/3J7A2842.avif";
import Image2 from "../assets/images/3J7A2842.avif";
import Image3 from "../assets/images/3J7A2842.avif";
import Image4 from "../assets/images/3J7A2842.avif";

function CaseStudy(props) {
  return (
    <div>
      <section className="case-study py-5">
        <div className="container">
          <p className="subtitle text-center">case study</p>
          <h2 className="title text-center">Our recent case studies</h2>
          <OwlCarousel className="owl-theme" loop margin={10}>
            <div
              className="cs-card shadow-sm col-12 mx-auto p-4"
              style={{
                backgroundImage: `url(${Image1})`,
              }}
            >
              <div className="cs-content">
                <p className="cs-category">Artificial Intelligence</p>
                <h4 className="cs-category-title">
                  amet consectetur adipisicing.
                </h4>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
            </div>

            <div
              className="cs-card shadow-sm col-12 mx-auto p-4"
              style={{
                backgroundImage: `url(${Image2})`,
              }}
            >
              <div className="cs-content">
                <p className="cs-category">Artificial Intelligence</p>
                <h4 className="cs-category-title">
                  amet consectetur adipisicing.
                </h4>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
            </div>

            <div
              className="cs-card shadow-sm col-12 mx-auto p-4"
              style={{
                backgroundImage: `url(${Image3})`,
              }}
            >
              <div className="cs-content">
                <p className="cs-category">Artificial Intelligence</p>
                <h4 className="cs-category-title">
                  amet consectetur adipisicing.
                </h4>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
            </div>

            <div
              className="cs-card shadow-sm col-12 mx-auto p-4"
              style={{
                backgroundImage: `url(${Image4})`,
              }}
            >
              <div className="cs-content">
                <p className="cs-category">Artificial Intelligence</p>
                <h4 className="cs-category-title">
                  amet consectetur adipisicing.
                </h4>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;
