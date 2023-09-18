import React from 'react'
import CorrectIcon from '../assets/Images/correctIcon.png'

const RequestRecive = () => {
    return (
        <>
            <div className="container card cst-second-hero-card p-4 text-center pt-5 pb-5">
                <div className='text-center mt-5 mb-4'>
                    <img src={CorrectIcon} className='img-fluid correct-icon' />
                </div>
                <h3 className='text-white mb-4'>Request Received</h3>
                <p className='text-white mb-4'>Our sales representative will get in touch with you shortly.</p>
                <p className='text-white mb-4'>Alternatively, Schedule a Time Slot Here</p>
            </div>
        </>
    )
}

export default RequestRecive