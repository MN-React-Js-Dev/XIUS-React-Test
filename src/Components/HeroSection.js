import React, { useEffect, useRef, useState } from "react";
import RequestRecive from "./RequestRecive";
import LetsTalkComponent from "./LetsTalkComponent";

const HeroSection = () => {
  const [flag, setflag] = useState(false)

  const handleSubmitButton = () => {
    setflag(true)
  }

  return (
    <>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <section className="hero-section d-none d-lg-block d-print-block">
              <div className="containers cst-container-hero-section ">
                <div className="row">
                  <div className="col-sm-6  ">
                    <h1 className="hero-heading mt-5">
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
                            <button className="btn-success form-control cst-hero-submit-btn w-50 " onClick={handleSubmitButton}>Submit</button>
                          </div>
                        </div>
                      </div>
                    </>}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="carousel-item">
            <section className="hero-section-two d-none d-lg-block d-print-block">
              <div className="containers cst-container-hero-section ">
                <div className="row">
                  <div className="col-sm-6  ">
                    <h1 className="hero-heading mt-5">
                      Unlock the Power of IP Multimedia Subsystem with XIUS IMS
                    </h1>
                    <p className="para-hero mt-2">
                      Take Your Communication Infrastructure to the Next Level with IMS
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
                            <button className="btn-success form-control cst-hero-submit-btn w-50 " onClick={handleSubmitButton}>Submit</button>
                          </div>
                        </div>
                      </div>
                    </>}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>





      <section className="for-mobile-hero-mobile d-sm-none ">
        <div className="container">
          <h1 className="mobile-hero-heading text-center text-white ">Revolutionize Your Communication with IP Multimedia Subsystem (IMS)</h1>
          <p className="mobile-hero-para text-center ">XIUS IMS Suite – an open, carrier-grade, fully virtualized and cloud ready solution for fixed, mobile and converged service providers.</p>
          <div className="text-center mt-5">
            <button className="mobile-hero-button mb-5 btn btn-outline text-danger talk-to-expert-btn p-3 px-4" >Talk to our experts</button>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center mt-3 d-sm-none">
        <button className="btn-success col-10 cst-hero-submit-btn p-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact us</button>
      </div>

      <LetsTalkComponent />


    </>
  );
};

export default HeroSection;


