import React from 'react'
import VectorFifteenImage from '../assets/Images/VectorFifteen.png'
import VectorSeventeenImage from '../assets/Images/VectorSeventeen.png'
import VectorEighteenImage from '../assets/Images/VectorEighteen.png'
import GroupNinteenImage from '../assets/Images/GroupNinteen.png'
import VectorTwenteeImage from '../assets/Images/VectorTwentee.png'
import GroupElevenImage from '../assets/Images/GroupEleven.png'
import GroupTwenteeTwoImage from '../assets/Images/GroupTwenteeTwo.png'
import VectorheartImage from '../assets/Images/Vectorheart.png'

const ServiceProvider = () => {
  return (
    <>
      <section className='ims-benifit-section mt-5 mb-5'>
        <div className='container'>
          <div className='row pb-5'>
            <h1 className='text-center '>Why Leading Service Providers Choose XIUS IMS?</h1>
            <p className='text-center fully-tried'>Commitment to Service Providers, Investment in Innovation and R&D, Decades of IP Expertise</p>
            <p className='text-center ims-suite'>XIUS is laser focused on helping service providers make their transition to IP as faster, frictionless, and profitable as possible. Our commitment to
              service providers, massive investment in innovation and R&D, decades of IP expertise, an industry-leading portfolio of carrier-grade IP solutions
              and a successful track record for deploying highly available solutions, makes us the most reliable and preferred partner for IMS.</p>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={VectorFifteenImage} className='img-fluid mb-4' />
              <p className='benifits-para'>A complete suite of cost-effective and reliable core network solutions</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={VectorSeventeenImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Rapid platform deployment that enables quick market capitalization</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={VectorEighteenImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Seamless, field-proven system integration with multi-vendor EPC & HSS elements</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={GroupNinteenImage} className='img-fluid mb-4' />
              <p className='benifits-para'>More than two decades of experience in developing, launching &amp; supporting tailored services</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={VectorTwenteeImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Innovative R&D that continually invests in and enhances its offerings</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={GroupElevenImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Enhanced efficiency to minimize downtime and ensure cost-efficient expansion</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={VectorheartImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Secured interoperability and best-in-class performance within a broad ecosystem</p>
            </div>
            <div className='col-sm-4 mb-5 mobile-res-cls'>
              <img src={GroupTwenteeTwoImage} className='img-fluid mb-4' />
              <p className='benifits-para'>Agile and flexible solutions to let you prioritize according to your unique business needs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceProvider