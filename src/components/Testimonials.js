import React from "react";
import "./Testimonials.css";
import PartnersImg from "../assets/images/partners.jpg";

function Testimonials(props) {
  return (
    <div>
      <section class="testimonials">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-12 mx-auto">
              <p class="subtitle">testimonials</p>
              <h3 class="testimony-title">Hear it from our clients.</h3>
              <img src={PartnersImg} alt="" class="img-fluid" />
            </div>
            <div class="col-md-6 testimony col-12 mx-auto">
              <i class="fa-solid fa-quote-left"></i>
              <p class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                maxime dolorum, eius dolor dolores perferendis impedit!
                Voluptate exercitationem mollitia distinctio quam! Minima earum
                error eum tenetur porro, voluptates placeat id!
              </p>
              <small class="test-author">Peter Johns</small>
              <p class="author-title">Head of informatics at EBI</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
