import React from 'react'
import VectorNineImage from '../assets/Images/VectorTen.png'
import VectorTenImage from '../assets/Images/VectorTen.png'
import VectorElevenImage from '../assets/Images/VectorEleven.png'
import VectorTwellImage from '../assets/Images/VectorTwell.png'
import VectorThirteenImage from '../assets/Images/VectorThirteen.png'
import VectorForteenImage from '../assets/Images/VectorForteen.png'



const ImsBenifitsSection = () => {
    return (
        <>
            <section className='ims-benifit-section mt-5 mb-5'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <h1 className='text-center pt-5 '>How Does IMS Benefit Your Business?</h1>
                        <p className='text-center business-para-ims'>Offer Ubiquitous Converged IP Multimedia Services that Combine Voice, Video, and Data Applications</p>
                        <p className='text-center second-para-ims mb-5'>IMS makes it possible for varied devices and networks to communicate in a secure and reliable manner using multimedia. The architectural
                            approach offers a single infrastructure and standard methods for managing, directing, and controlling sessions.</p>
                        <div className='col-sm-4 pb-5'>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorNineImage} className='img-fluid mb-4' />
                                <h2>Interoperability</h2>
                                <p>IMS is designed to promote interoperability between different network technologies and service providers. It allows seamless communication and service delivery across heterogeneous networks, such as 4G, 5G, Wi-Fi, and fixed broadband.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 pb-5'>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorTenImage} className='img-fluid mb-4' />
                                <h2>Quality of Service (QoS)</h2>
                                <p>IMS employs the Session Initiation Protocol (SIP) for session control, allowing efficient establishment, modification, and termination of multimedia sessions. This enables real-time communication between users in various service scenarios.

                                </p>
                            </div>
                        </div>
                        <div className='col-sm-4 pb-5 '>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorElevenImage} className='img-fluid mb-4' />
                                <h2>Scalability and Flexibility</h2>
                                <p>IMS is built with scalability in mind, allowing service providers to expand their networks to support a growing
                                    number of users and services. Its modular architecture facilitates the addition of new services and functionalities without disrupting the
                                    existing system.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 pb-5'>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorTwellImage} className='img-fluid mb-4' />
                                <h2>Session Control</h2>
                                <p>IMS employs the Session Initiation Protocol (SIP) for session control, allowing efficient establishment, modification, and
                                    termination of multimedia sessions. This enables real-time communication between users in various service scenarios.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 pb-5'>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorThirteenImage} className='img-fluid mb-4' />
                                <h2>Rich Communication Services (RCS)</h2>
                                <p>IMS forms the foundation for implementing RCS, which provides enhanced communication
                                    features like group chat, presence information, and read receipts, similar to popular messaging apps.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 pb-5'>
                            <div className='cst-card-ims p-4'>
                                <img src={VectorForteenImage} className='img-fluid mb-4' />
                                <h2>Security</h2>
                                <p>IMS is designed to promote interoperability between different network technologies and service providers. It allows seamless communication and service delivery across heterogeneous networks, such as 4G, 5G, Wi-Fi, and fixed broadband.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn-success col-sm-4 cst-hero-submit-btn p-3">Talk to our experts</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImsBenifitsSection