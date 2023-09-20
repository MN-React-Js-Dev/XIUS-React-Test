import React, { useState } from 'react'
import RequestReciveMobile from './RequestReciveMobile'

const LetsTalkComponent = () => {
    const [flag, setFlag] = useState(true)
    const [submitflag, setSubmitFlag] = useState(false)

    const handleNextButton = () => {
        setFlag(false)
    }
    const handleClose = () => {
        setFlag(true)
    }

    const handleSubmitButton = () => {
        setSubmitFlag(true)
    }
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="d-flex justify-content-end pt-4 px-4">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div class="modal-body">
                            <h1 className="text-center">Let’s talk</h1>
                            {flag ? <>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Full name</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Work email ID</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Mobile number</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Country</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4">
                                    <label>Designation</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                            </> : <>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Company name</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Industry</label>
                                    <input className="form-control" placeholder="Enter here" />
                                </div>
                                <div className="inpt-wrap-mobile-hero mb-4 ">
                                    <label>Message</label>
                                    <textarea className="form-control" rows={10} placeholder="Enter here"></textarea>
                                </div>
                            </>

                            }

                        </div>
                        {flag ? <>
                            <div class=" text-center d-flex justify-content-center mb-4">
                                <button className="btn btn-primary col-11 cst-hero-submit-btn" onClick={handleNextButton}>NEXT</button>
                            </div>
                        </> :
                            <>
                                <div class=" text-center d-flex justify-content-center mb-4">
                                    <button type="button" class="btn btn-primary col-11 cst-hero-submit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={handleSubmitButton} >Submit</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {submitflag ? <RequestReciveMobile handleSubmitButton={handleSubmitButton}/> : ""}


        </>
    )
}

export default LetsTalkComponent