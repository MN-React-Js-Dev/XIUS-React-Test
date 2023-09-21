import React, { useEffect, useState } from "react";
import RequestRecive from "./RequestRecive";
import HeroImage1 from '../assets/Images/heroimage.png'
import HeroImage2 from '../assets/Images/heroSecindImage.png'
import { useLocation, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [flag, setflag] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();


  const handleSubmitButton = () => {
    setflag(true)
  }

  const headings = [
    "Revolutionize Your Communication with IP Multimedia Subsystem (IMS)",
    "Unlock the Power of IP Multimedia Subsystem with XIUS IMS"
  ];

  const paras = [
    "XIUS IMS Suite – an open, carrier-grade, fully virtualized and cloud-ready solution for fixed, mobile, and converged service providers.",
    "Take Your Communication Infrastructure to the Next Level with IMS"
  ];

  const HeroImages = [HeroImage1, HeroImage2]
  let currentIndex = 0;
  let currentIndexPara = 0;
  let currentIndexHeroImages = 0;

  function changeHeading() {
    const headingElement = document.querySelector(".hero-heading");
    const parasElement = document.querySelector(".para-hero");

    headingElement.textContent = headings[currentIndex];
    parasElement.textContent = paras[currentIndexPara];
    currentIndex = (currentIndex + 1) % headings.length;
    currentIndexPara = (currentIndexPara + 1) % paras.length;

    const textColor = currentIndex % 2 === 0 ? "black" : "white";
    headingElement.style.color = textColor;
    parasElement.style.color = textColor;

    const backgroundElement = document.querySelector(".hero-section");
    backgroundElement.style.backgroundImage = `url(${HeroImages[currentIndexHeroImages]})`;
    currentIndexHeroImages = (currentIndexHeroImages + 1) % HeroImages.length;
  }

  useEffect(() => {
    const interval = setInterval(changeHeading, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>


      <section className="hero-section d-none d-lg-block d-print-block">
        <div className="containers cst-container-hero-section ">
          <div className="row">
            <div className="col-sm-6  ">
              <h1 className="hero-heading mt-5"  >
                Revolutionize Your Communication with IP Multimedia Subsystem (IMS)
              </h1>
              <p className="para-hero">
                XIUS IMS Suite – an open, carrier-grade, fully virtualized and
                cloud-ready solution for fixed, mobile, and converged service providers.
              </p>
              <button className=" mb-5 btn btn-outline text-danger talk-to-expert-btn p-3 px-5">Talk to our experts</button>
            </div>
            <div className="col-sm-6 second-column-hero">
              {flag ? <RequestRecive /> : <>
                <div className="container card cst-hero-card ">
                  <div className="row">
                    <h1 className="text-center "><b>Let’s talk</b></h1>
                    <div className="col-sm-6">
                      <div className="inpt-wrap ">
                        <label>Full name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Work email ID</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Mobile number</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Country</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap">
                        <label>Designation</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="inpt-wrap ">
                        <label>Company name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Industry</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Message</label>
                        <textarea className="form-control" rows={8} placeholder="Enter here"></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button type="button" className="btn-success form-control cst-hero-submit-btn w-50 " onClick={handleSubmitButton}>Submit</button>
                    </div>
                  </div>
                </div>
              </>}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="hero-section-two d-none d-lg-block d-print-block">
        <div className="containers cst-container-hero-section ">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="hero-heading mt-5">
                Unlock the Power of IP Multimedia Subsystem with XIUS IMS
              </h1>
              <p className="para-hero mt-2">
                Take Your Communication Infrastructure to the Next Level with IMS
              </p>
              <button className="mb-5 btn btn-outline text-danger talk-to-expert-btn p-3 px-5">Talk to our experts</button>
            </div>
            <div className="col-sm-6 second-column-hero">
              {flag ? <RequestRecive /> : <>
                <div className="container card cst-hero-card ">
                  <div className="row">
                    <h1 className="text-center "><b>Let’s talk</b></h1>
                    <div className="col-sm-6">
                      <div className="inpt-wrap ">
                        <label>Full name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Work email ID</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Mobile number</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Country</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap">
                        <label>Designation</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="inpt-wrap ">
                        <label>Company name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Industry</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap ">
                        <label>Message</label>
                        <textarea className="form-control" rows={8} placeholder="Enter here"></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button className="btn-success form-control cst-hero-submit-btn w-50 " onClick={handleSubmitButton}>Submit</button>
                    </div>
                  </div>
                </div>
              </>}
            </div>
          </div>
        </div>
      </section> */}

      <section className="for-mobile-hero-mobile d-sm-none ">
        <div className="container">
          <h1 className="mobile-hero-heading text-center text-white ">Revolutionize Your Communication with IP Multimedia Subsystem (IMS)</h1>
          <p className="mobile-hero-para text-center ">XIUS IMS Suite – an open, carrier-grade, fully virtualized and cloud ready solution for fixed, mobile and converged service providers.</p>
          <div className="text-center mt-5">
            <button className="mobile-hero-button mb-5 btn btn-outline text-danger talk-to-expert-btn p-3 px-4" >Talk to our experts</button>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center d-sm-none" style={{ backgroundColor: "white" }}>
        <button className="btn-success col-10 cst-hero-submit-btn p-3 scrollable-button" onClick={() => navigate("/lets-talk")}>Contact us</button>
      </div>




    </>
  );
};

export default HeroSection;


