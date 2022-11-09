import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="footer-wrapper row">
            <footer-col class="col-md-3 col-12 mx-auto mb-3">              
             
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
            </div>
                       
          <hr />
          <div class="copyright text-center py-3">
            &copy; Copyright 2022 altitude80. All rights reserved | Developed
            by:
            <span class="dev">
              <a href="https://example.com">Strategic Machines</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
