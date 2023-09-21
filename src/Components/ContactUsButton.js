import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContactUsButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <div >
                <div className="d-flex justify-content-center d-sm-none" style={{ backgroundColor: "white" }}>
                    <button className="btn-success col-10 cst-hero-submit-btn p-3 scrollable-button" onClick={() => navigate("/lets-talk")}>Contact us</button>
                </div>
            </div>
        </>
    )
}

export default ContactUsButton