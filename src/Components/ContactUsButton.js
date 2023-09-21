import React from 'react'
import { useNavigate } from 'react-router-dom';
import RectangleImage from '../assets/Images/Rectangle.png'
const ContactUsButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex justify-content-center d-sm-none'>
                <div className="new-code-cls scrollable-button p-2 col-12" style={{ backgroundColor: "white" }}>
                    <button className="btn-success col-12 p-3 cst-hero-submit-btn" onClick={() => navigate("/lets-talk")}>Contact us</button>
                </div>
            </div>
        </>
    )
}

export default ContactUsButton