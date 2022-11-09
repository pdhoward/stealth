import React from "react";

function Navbar(props) {
  return (
    <div class="container">
      <nav class="nav-bar">
        <div class="nav-brand">
          <a href="index.html">
            <img class="img-fluid" src={props.logo} alt="" />
          </a>
        </div>
        <ul class="nav-items">
          <li class="nav-item">
            <a href="index.html" class="nav-link active">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="services.html" class="nav-link">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="projects.html" class="nav-link">
              Projects
            </a>
          </li>
          <li class="nav-item" id="dropdown-toggle">
            <a href="#" class="nav-link">
              Pages <i class="fa-solid fa-caret-up"></i>
            </a>
            <div class="dropdown">
              <a href="faq.html" class="dd-link">
                FAQ
              </a>
              <a href="our-team.html" class="dd-link">
                Our Team
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a href="contacts.html" class="nav-link">
              Contact
            </a>
          </li>
          <a href="#" class="btn btn-dark header-btn px-5">
            Let's Talk
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
            <li class="mobile-nav-item">
              <a href="about.html" class="nav-link">
                About
              </a>
            </li>
            <li class="mobile-nav-item">
              <a href="services.html" class="nav-link">
                Services
              </a>
            </li>
            <li class="mobile-nav-item">
              <a href="projects.html" class="nav-link">
                Projects
              </a>
            </li>
            <li class="mobile-nav-item">
              <a href="#" class="nav-link">
                Pages
              </a>
            </li>
            <li class="mobile-nav-item">
              <a href="contacts.html" class="nav-link">
                Contact
              </a>
            </li>
            <a href="#" class="btn btn-dark mobile-btn px-5">
              Let's Talk
              <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
