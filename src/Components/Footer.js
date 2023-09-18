import React from 'react'
import LinkDinImage from '../assets/Images/VectorLinkdin.png'
import VectorTwitter from '../assets/Images/VectorTwitter.png'
import InstagramImage from '../assets/Images/Instagram.png'
import FacbookImage from '../assets/Images/Facbook.image.png'

const Footer = () => {
  return (
    <>
      <div className='footer-section'>
        <div className='container'>
          <div className='pt-5 pb-5'>
            <hr ></hr>
          </div>
          <p className='text-center copright-para'><b>© Copyright 2023 Saletancy Consulting Private Limited  |  Made with ❤️ by Saletancy  |  <span>Privacy Policy</span> |<span> Terms & Condition</span></b> </p>
          <div className='social-meadia-div d-flex justify-content-center mt-5 mb-5'>
            <img src={LinkDinImage} className='img-fluid' />
            <img src={VectorTwitter} className='img-fluid' />
            <img src={InstagramImage} className='img-fluid' />
            <img src={FacbookImage} className='img-fluid' />
          </div>
          <div className='text-center pb-5'>
            <h3>About XIUS</h3>
            <p className='footer-para'>XIUS is a mobile tech specialist in real-time transaction processing for Mobile Infrastructure, Mobile Payment &amp; IoT Solutions. Our
              comprehensive Suite of OSS/BSS Platforms enable mobile operators, MVNOs &amp; Data carriers to quickly launch &amp; monetize their service offerings
              in the market. XIUS has been providing telecom services to mobile operators for nearly 25 years, with a global footprint across 5 continents –
              having filed over 120 patent applications, with 35 being awarded to date</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer