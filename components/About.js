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
                src='https://res.cloudinary.com/stratmachine/image/upload/v1668023498/ai_hmkv5d.gif' alt="" 
                className="img-fluid about-img-1"                 
                />
             
            </div>
            <div className="about-right col-md-6 col-12 mx-auto">
              <p className="subtitle">Our mission</p>
              <h2 className="title">
                We bring the power of data science & ai to legacy systems
              </h2>
              <p className="about-text">
                The power of software in running the modern enterprise is well understood. 
                It permeates every operation of an organization. Yet, over time, legacy systems become dated, unresponsive
                and difficult to maintain, impeding rather than propelling business performance. Leveraging the power of AI
                for modernizing systems with precision and efficiency is our mission.
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
