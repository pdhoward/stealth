import React from "react";
import "./CTA.css";
import Ctabg from "../assets/images/cta-bg.jpg";

function CTA(props) {
  return (
    <div>
      <section className="cta" style={{ backgroundImage: `url(${Ctabg})` }}>
        <div className="container cta-wrapper">
          <div className="cta-container">
            <h3 className="cta-title">Let's make something great together</h3>
            <a href="#" className="cta-btn">
              Contact Us
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
