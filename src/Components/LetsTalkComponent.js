import React, { useState } from 'react'
import RequestReciveMobile from './RequestReciveMobile'
import { useNavigate } from 'react-router-dom'

const LetsTalkComponent = () => {
    const [flag, setFlag] = useState(true)
    const [submitflag, setSubmitFlag] = useState(false);
    const navigate = useNavigate();
    const handleNextButton = () => {
        setFlag(false)
    }
    // const handleClose = () => {
    //     setFlag(true)
    // }

    const handleSubmitButton = () => {
        setSubmitFlag(true)
        navigate("/reuest")
    }

    return (
        <>
            <div className='container d-sm-none px-3'>
                <h1 className="text-center mt-4">Let’s talk</h1>
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
                    <div className="inpt-wrap-mobile-hero mb-4">
                        <label>Company name</label>
                        <input className="form-control" placeholder="Enter here" />
                    </div>
                    <div className="inpt-wrap-mobile-hero mb-4">
                        <label>Industry</label>
                        <input className="form-control" placeholder="Enter here" />
                    </div>
                    <div className="inpt-wrap-mobile-hero mb-4">
                        <label>Message</label>
                        <textarea className="form-control" rows={10} placeholder="Enter here"></textarea>
                    </div>
                </>

                }


                {flag ? <>
                    <div class=" text-center d-flex justify-content-center mb-4">
                        <button type='button' className="btn btn-primary col-12 cst-hero-submit-btn" onClick={handleNextButton}>NEXT</button>
                    </div>
                </> :
                    <>
                        <div class=" text-center d-flex justify-content-center mb-4">
                            <button type="button" class="btn btn-primary col-12 cst-hero-submit-btn" onClick={handleSubmitButton} >Submit</button>
                        </div>
                    </>
                }

                {submitflag ? <RequestReciveMobile handleSubmitButton={handleSubmitButton} /> : ""}

            </div>
        </>
    )
}

export default LetsTalkComponent