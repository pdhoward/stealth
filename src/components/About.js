import React from "react";
import "./About.css";
// import Image1 from "../assets/images/3J7A2842.avif";
// import Image2 from "../assets/images/RobotArm_AI_Processor.avif";
// import Image3 from "../assets/images/3J7A2910.avif";

function About(props) {
  return (
    <div>
      <section className="about-section py-5" loading="lazy">
        <div className="container">
          <div className="about-wrapper row">
            <div className="about-left col-md-4 col-12 mx-auto">
              <img 
                src='https://res.cloudinary.com/stratmachine/image/upload/v1654372190/abstracts/Analytics_Abstract_Spot_Icon_ea3hh0.png' alt="" 
                className="img-fluid about-img-1"                 
                />
             
            </div>
            <div className="about-right col-md-6 col-12 mx-auto">
              <p className="subtitle">About us</p>
              <h2 className="title">
                We bring the power of data science & ai to business
              </h2>
              <p className="about-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                eaque sunt nostrum aliquam labore modi quod impedit velit dicta
                totam.
              </p>
              <p className="about-list-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="about-list-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="about-list-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <a
                href="#"
                className="pri-btn btn-dark"
                styleName="max-width: 300px"
              >
                Discover more
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
