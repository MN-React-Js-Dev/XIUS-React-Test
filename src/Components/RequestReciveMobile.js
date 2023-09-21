import React from 'react'
import CorrectIcon from '../assets/Images/correctIcon.png'

const RequestReciveMobile = ({ handleSubmitButton }) => {
    return (
        <>
            <div class="modal-content ims-section">
                <section className='mobile-request-recive'>
                    <div className='container'>
                        <div className='text-center'>
                            <img src={CorrectIcon} className='img-fluid correct-icon mobile-correct-icon' />
                        </div>
                        <h3 className='text-center text-white mt-5' style={{ fontSize: "32px", fontWeight: "700" }}>Request Received</h3>
                        <p className='text-center text-white  mt-4 ' style={{ fontSize: "16px", fontWeight: "500" }}>Our sales representative will get in touch with you shortly.</p>
                    </div>
                </section>
            </div>

        </>
    )
}

export default RequestReciveMobile