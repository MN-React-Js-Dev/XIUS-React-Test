import React from 'react'
import VectorIpImage from '../assets/Images/VectorIp.png'
import Vector7Image from '../assets/Images/Vector7.png'
import Vector5GImage from '../assets/Images/Vector5G.png'
import VectorSettingImage from '../assets/Images/VectorSetting.png'
import VectorDiscImage from '../assets/Images/VectorDisc.png'
import VectorFanImage from '../assets/Images/VectorFan.png'
import Vector4GImage from '../assets/Images/Vector4G.png'
import VectorVirus from '../assets/Images/VectorVirus.png'
import LteVector from '../assets/Images/lteVector.png'
import MobileMenu from '../assets/Images/MobileMenu.png'
import VectorUsers from '../assets/Images/VectorUsers.png'
import VectorMessageImage from '../assets/Images/VectorMessage.png'

const FeatureImsSection = () => {
    return (
        <>
            <section className='ims-benifit-section mt-5 mb-5'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <h1 className='text-center pt-5 '>Feature-packed IMS Core</h1>
                        <p className='text-center fully-tried'>A fully tried, tested and trusted package for service providers</p>
                        <p className='text-center ims-suite mb-5'>XIUS IMS suite comes with all the capabilities required to handle a Single Core Architecture LTE/VoLTE and IMS subscribers, legacy POTS and
                            ISDN subscribers, interconnection with PSTN, PLMN and IP-based networks with full signaling interworking as well as media handling.</p>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorIpImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>Single All-IP Access and Core network ready for fixed and mobile subscribers</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={Vector7Image} className='img-fluid mb-4' />
                            <p className='benifits-para'>Capability to handle even pre-IMS and non-IMS SIP devices such as SIP IETF devices and SIP IP-PBX</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={Vector5GImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>3GPP-compliant and 5G-ready for VoNR</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorSettingImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>Supplementary and regulatory Services</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorDiscImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>Standard ISC interfaces and initial Filter Criteria capabilities to handle any third party AS</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorFanImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>Support for RCS-e devices and for Joynt / RCS enablers</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={Vector4GImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>eSR-VCC for 4G to 2G/3G handover</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorVirus} className='img-fluid mb-4' />
                            <p className='benifits-para'>CAMEL phase 2 and INAP CS1, CS2 support for interconnection with legacy SCP</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={LteVector} className='img-fluid mb-4' />
                            <p className='benifits-para'>Convergent LTE / IMS HSS</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={MobileMenu} className='img-fluid mb-4' />
                            <p className='benifits-para'>Fully virtualized Solution deployable in Datacenter and Cloud / NFV environment</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorUsers} className='img-fluid mb-4' />
                            <p className='benifits-para'>Service personalization based on specific user preferences &amp; service subscriptions</p>
                        </div>
                        <div className='col-sm-4 mb-5 mobile-res-cls'>
                            <img src={VectorMessageImage} className='img-fluid mb-4' />
                            <p className='benifits-para'>Service interconnection, diversity and policy-based QoS methods that guarantee SLAs</p>
                        </div>
                         
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureImsSection