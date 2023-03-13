import React from "react";

function Navbar(props) {
  return (
    <div class="container">
      <nav class="nav-bar">
        <div class="nav-brand">
          <a href="index.html">
            <img class="img-fluid" height="40px" width="40px" src="https://res.cloudinary.com/stratmachine/image/upload/v1592332357/machine/icon-256x256_tngwvq.png" alt="" />
          </a>
        </div>
        <ul class="nav-items">
          <li class="nav-item">
            <a href="index.html" class="nav-link active">
              Home
            </a>
          </li>
          
          <a href="#" class="btn btn-dark header-btn px-5">
            Request Early Access
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </a>
        </ul>
        <i
          class="fa fa-bars"
          aria-hidden="true"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        ></i>
        <i class="fa fa-times" aria-hidden="true"></i>
      </nav>

      {/* Mobile menu */}
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="mobile-nav">
            <li class="mobile-nav-item">
              <a href="index.html" class="nav-link active">
                Home
              </a>
            </li>
           
            <a href="#" class="btn btn-dark mobile-btn px-5">
              Request Early Access
              <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
