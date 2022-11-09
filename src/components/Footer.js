import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="footer-wrapper row">
            <footer-col class="col-md-3 col-12 mx-auto mb-3">
              <img
                src="./assets/images/logo.png"
                alt=""
                class="img-fluid ft-logo"
              />
              <p class="ft-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati iusto vel unde atque culpa, nulla necessitatibus
                veniam quasi sequi error!
              </p>
              <span class="ft-icon">
                <i class="fa-brands fa-facebook"></i>
              </span>
              <span class="ft-icon">
                <i class="fa-brands fa-twitter"></i>
              </span>
              <span class="ft-icon">
                <i class="fa-brands fa-linkedin"></i>
              </span>
            </footer-col>
            <footer-col class="col-md-3 col-12 mx-auto mb-3">
              <p class="ft-title">Useful Links</p>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Home
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  About
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Services
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Projects
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Contact Us
                </a>
              </div>
            </footer-col>
            <footer-col class="col-md-3 col-12 mx-auto mb-3">
              <p class="ft-title">Our Services</p>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Robotic Automation
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Predictive Analysis
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Machine Learning
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  Data Security
                </a>
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                <a href="#" class="ft-link">
                  IT Management
                </a>
              </div>
            </footer-col>
            <footer-col class="col-md-3 col-12 mx-auto mb-3">
              <p class="ft-title">Contact Us</p>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                +61 231 545678
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                info@divergeai.co
              </div>
              <div class="footer-links">
                <i class="fa-solid fa-arrow-right"></i>
                165 malibet drive, Nairobi, Kenya
              </div>
            </footer-col>
          </div>
          <hr />
          <div class="copyright text-center py-3">
            &copy; Copyright 2022 Diverge AI. All rights reserved | Developed
            by:
            <span class="dev">
              <a href="https://nimrodmusungu.com">Nimrod Musungu</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
