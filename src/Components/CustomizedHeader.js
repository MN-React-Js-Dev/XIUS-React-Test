import { useNavigate } from "react-router-dom";
import Logo from "../assets/Images/mainLogo.png";
import { IoMdClose } from "react-icons/io";


const CustomizedHeader = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary new-header  d-sm-none" style={{ background: "white !important" }}>
        <div class="container-fluid">
          <a class="navbar-brand px-4" href="#" style={{
            width: "176px",
            height: "93.617px"
          }}>
            <span className="navbar tooger-icon "></span><img src={Logo} className="img-fluid" />
          </a>
          <button class="btn btn-outline d-sm-none  mt-4" type="button" data-bs-toggle="collapsse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => navigate("/")}>
            <IoMdClose style={{ fontSize: "30px" }} />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default CustomizedHeader