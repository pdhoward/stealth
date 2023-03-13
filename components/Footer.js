import React from "react";


function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper row">
            <footer-col className="col-md-3 col-12 mx-auto mb-3">              
             
              <span className="ft-icon">
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span className="ft-icon">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="ft-icon">
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </footer-col>
            </div>
                       
          <hr />
          <div className="copyright text-center py-3">
            &copy; Copyright 2022 STRATEGIC MACHINES. All rights reserved | Developed
            by:
            <span className="dev">
              <a href="https://example.com">Strategic Machines</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
