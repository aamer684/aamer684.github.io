import React from 'react'
import './OurServices.css'

import services_mobile_app from '../../assets/ourservices/services_mobile_app.png'
import services_social_media_marketing from '../../assets/ourservices/services_social_media_marketing.png'
import services_software_development from '../../assets/ourservices/services_software_development.png'
import services_web_development from '../../assets/ourservices/services_web_development.png'
import services_digital_marketing from '../../assets/ourservices/services_digital_marketing.png'
import detailsIcon from '../../assets/details.png'

const OurServices = () => {
  return (
    <div>
      <div className='services'>
        <div className="service">   
            <h1>Software Development</h1>        
            <img src={services_software_development} alt="" /> 
            <div className="caption">
                <img src={detailsIcon} alt="" />
                {/* <p>Software Development</p> */}
                <p>Tailored solutions to streamline operations and boost productivity.</p>
            </div>           
        </div>
        <div className="service">
        <h1>Web Development</h1>
            <img src={services_web_development} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
                {/* <p>Web Development</p> */}
                <p>Custom websites that convert visitors into customers.</p>
            </div>     
        </div>
        <div className="service">
        <h1>Mobile App Development</h1>
            <img src={services_mobile_app} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
               {/*  <p>Mobile App Development</p> */}
                <p>mobile apps for customer engagement and service management.</p>
            </div>     
        </div>


        <div className="service">   
            <h1>Digital Marketing</h1>     
            <img src={services_digital_marketing} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
                {/* <p>Digital Marketing</p> */}
                <p>SEO, Google Ads, and email campaigns to drive traffic and leads.</p>
            </div>     
        </div>
        <div className="service">  
            <h1>Social Media Marketing</h1>       
            <img src={services_social_media_marketing} alt="" />
            <div className="caption">
            <img src={detailsIcon} alt="" />
               {/*  <p>Social Media Marketing</p> */}
                <p>Build your brand and connect with customers on Facebook, Instagram, and more.</p>
            </div>     
        </div>

        </div>
    </div>
  )
}

export default OurServices
