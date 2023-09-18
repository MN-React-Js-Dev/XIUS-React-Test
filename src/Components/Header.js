import React from "react";
import Logo from "../assets/Images/mainLogo.png";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand px-4" href="#">
            <img src={Logo} className="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <form class="d-flex px-4" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"></li>
                <a class="nav-link active" aria-current="page" href="#" style={{ textDecoration: "underline" }}><b>Overview</b></a>
                <a class="nav-link" aria-current="page" href="#">Why IMS</a>
                <a class="nav-link" aria-current="page" href="#">Benefits</a>
                <a class="nav-link" aria-current="page" href="#">Why XIUS</a>
                <a class="nav-link" aria-current="page" href="#">Features</a>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
