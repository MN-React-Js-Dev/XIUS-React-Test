import React from 'react'
import VectorSixImage from '../assets/Images/VectorSix.png'
import VectorSevenImage from '../assets/Images/VectorSeven.png'
import VectorEightImage from '../assets/Images/VectorEight.png'
const AboutIMS = () => {
    return (
        <>
            <section className='ims-section mt-5 mb-5'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <h1 className='text-center pt-5 text-white '>What’s Special About IMS?</h1>
                        <p className='text-center text-white mobile-communication'>Strengthen Your Backbone of Modern Mobile Communication</p>
                        <div className='col-sm-4 mb-4'>
                            <div className='special-cls gradient-box-two  p-4'>
                                <img src={VectorSixImage} className='img-fluid mb-4' />
                                <h2>A Seamless and Integrated Experience</h2>
                                <p>XIUS IMS seamlessly integrates voice, video, messaging, and data services into a single platform, giving you a unified and immersive communication experience like never before.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 mb-4'>
                            <div className='special-cls gradient-box-two p-4'>
                                <img src={VectorSevenImage} className='img-fluid mb-4' />
                                <h2>Stay Connected Anytime, Anywhere</h2>
                                <p>It helps you to stay connected no matter where you are. Whether you’re in the office, at home, or on the go, enjoy uninterrupted communication across multiple devices across countries.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 mb-4'>
                            <div className='special-cls gradient-box-two p-4'>
                                <img src={VectorEightImage} className='img-fluid mb-4' />
                                <h2>Enhanced Quality and Reliability</h2>
                                <p>Experience crystal-clear voice calls, high-definition video conferencing, and lightning-fast data transfer with XIUS IMS. Good Quality Product alwaays help to Enjoy Say goodbye to dropped calls and lagging connections.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutIMS