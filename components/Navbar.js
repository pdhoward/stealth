import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-brand">
          <a href="index.html">
            <img className="img-fluid" height="40px" width="40px" src="https://res.cloudinary.com/stratmachine/image/upload/v1592332357/machine/icon-256x256_tngwvq.png" alt="" />
          </a>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="index.html" className="nav-link active">
              Home
            </a>
          </li>
          
          <a href="#" className="btn btn-dark header-btn px-5">
            Request Early Access
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </a>
        </ul>
        <i
          className="fa fa-bars"
          aria-hidden="true"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        ></i>
        <i className="fa fa-times" aria-hidden="true"></i>
      </nav>

      {/* Mobile menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mobile-nav">
            <li className="mobile-nav-item">
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
           
            <a href="#" className="btn btn-dark mobile-btn px-5">
              Request Early Access
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
