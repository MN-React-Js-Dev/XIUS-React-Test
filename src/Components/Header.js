import { useState } from "react";
import Logo from "../assets/Images/mainLogo.png";
import MenuIcon from "../assets/Images/menuIcon.png";

const Header = () => {
  const [flag, setflag] = useState(false)
  const handleToogleCst = () => {
    setflag(!flag)
  }
  return (
    <>
      <nav class={`navbar navbar-expand-lg bg-body-tertiary ${flag && 'main-header-first'}`} >
        <div class="container-fluid">
          <a class="navbar-brand px-4" href="#" style={{
            width: "176px",
            height: "93.617px"
          }}>
            <span className="navbar tooger-ico "></span><img src={Logo} className="img-fluid" />
          </a>
          <button class="btn btn-outline d-sm-none  mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToogleCst}>
            <img src={MenuIcon} className="fluid-img" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <form class="text-center px-4">
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
