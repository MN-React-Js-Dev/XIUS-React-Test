import React, { useState } from "react";
import RequestRecive from "./RequestRecive";

const HeroSection = () => {
  const [flag, setflag] = useState(false)

  const handleSubmitButton = () => {
    setflag(true)
  }
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mt-5">
              <h1 className="hero-heading mt-5">
                Revolutionize Your Communication with IP Multimedia Subsystem (IMS)
              </h1>
              <p className="para-hero">
                XIUS IMS Suite – an open, carrier-grade, fully virtualized and
                cloud-ready solution for fixed, mobile, and converged service providers.
              </p>
              <button className=" mb-5 btn btn-outline text-danger talk-to-expert-btn p-2 px-4">Talk to our experts</button>
            </div>
            <div className="col-sm-6">
              {flag ? <RequestRecive /> : <>
                <div className="container card cst-hero-card p-4">
                  <h1 className="text-center mb-3"><b>Let’s talk</b></h1>
                  <div className="row">
                    <div className="col-6">
                      <div className="inpt-wrap mb-3">
                        <label>Full name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap mb-3">
                        <label>Work email ID</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap mb-3">
                        <label>Mobile number</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap mb-3">
                        <label>Country</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap">
                        <label>Designation</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="inpt-wrap mb-3">
                        <label>Company name</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap mb-3">
                        <label>Industry</label>
                        <input className="form-control" placeholder="Enter here" />
                      </div>
                      <div className="inpt-wrap mb-3">
                        <label>Message</label>
                        <textarea className="form-control" rows={8} placeholder="Enter here"></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn-success form-control w-50 cst-hero-submit-btn" onClick={handleSubmitButton}>Submit</button>
                    </div>
                  </div>
                </div>
              </>}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;


