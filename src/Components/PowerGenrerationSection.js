import React from 'react'
import VectorFirstImage from '../assets/Images/VectorFirst.png'
import VectorSecondImage from '../assets/Images/VectorSecond.png'
import VectorThirdImage from '../assets/Images/VectorThird.png'
import VectorFoureImage from '../assets/Images/VectorFoure.png'
import VectorFiveImage from '../assets/Images/VectorFive.png'


const PowerGenrerationSection = () => {
    return (
        <>
            <section className='power-generation mt-5 mb-5'>
                <div className='container'>
                    <div className='mt-5'>
                        <h1 className='text-center'>Experience the Power of Next-Generation Communication Technology</h1>
                        <p className='text-center cloud-native-para'>Cloud Native Communication Platform Optimized for Fixed, 4G, 5G and WiFi Deployments</p>
                        <p className='text-center transition-seamlessly-para'>Transition seamlessly to an advanced communication system with XIUS IMS Suite, a vendor-neutral, 3GPP-compliant and carrier-grade platform
                            offering a full coverage of IMS and Voice / Video over LTE functionalities enabling fixed and mobile subscribers to be managed by a single All-IP
                            providing regulatory, supplementary and value added services.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col-sm-4 mb-5 mobile-res-cls'>
                                <img src={VectorFirstImage} className='img-fluid mb-4' />
                                <p className='benifits-para'>Move from legacy softswitch to full IMS and VoLTE virtualized
                                    network
                                </p>
                            </div>
                            <div className='col-sm-4 mb-5 mobile-res-cls'>
                                <img src={VectorSecondImage} className='img-fluid mb-4' />
                                <p className='benifits-para'>
                                    Introduce a Single Core for all the subscribers providing full set of regulatory and supplementary services
                                </p>
                            </div>
                            <div className='col-sm-4 mb-5 mobile-res-cls'>

                                <img src={VectorThirdImage} className='img-fluid mb-4' />

                                <p className='benifits-para'>
                                    Improve energy efficiency up to 20% through common resource utilisation
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-4 mb-5 mobile-res-cls'>
                                <img src={VectorFoureImage} className='img-fluid mb-4' />
                                <p className='benifits-para'>
                                    Reduce your OpEx and CapEx with modular architecture and Network Function Virtualization
                                </p>
                            </div>
                            <div className='col-sm-4 mb-5 mobile-res-cls'>
                                <img src={VectorFiveImage} className='img-fluid mb-4' />

                                <p className='benifits-para'>
                                    Reduce TCO of the network infrastructure by moving to the cloud environment
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PowerGenrerationSection