import React from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css';

import services_mobile_app from '../../assets/ourservices/services_mobile_app.png';
import services_social_media_marketing from '../../assets/ourservices/services_social_media_marketing.png';
import services_software_development from '../../assets/ourservices/services_software_development.png';
import services_web_development from '../../assets/ourservices/services_web_development.png';
import services_digital_marketing from '../../assets/ourservices/services_digital_marketing.png';
import detailsIcon from '../../assets/details.png';

const OurServices = () => {
  return (
    <div className="services">
      <div className="service">
        <h1>Software Development</h1>
        <img src={services_software_development} alt="" />
        <Link to="/services/software-development" className="caption">
          <img src={detailsIcon} alt="" />
          <p>Tailored solutions to streamline operations and boost productivity.</p>
        </Link>
      </div>

      <div className="service">
        <h1>Web Development</h1>
        <img src={services_web_development} alt="" />
        <Link to="/services/web-development" className="caption">
          <img src={detailsIcon} alt="" />
          <p>Custom websites that convert visitors into customers.</p>
        </Link>
      </div>

      <div className="service">
        <h1>Mobile App Development</h1>
        <img src={services_mobile_app} alt="" />
        <Link to="/services/mobile-app-development" className="caption">
          <img src={detailsIcon} alt="" />
          <p>Mobile apps for customer engagement and service management.</p>
        </Link>
      </div>

      <div className="service">
        <h1>Digital Marketing</h1>
        <img src={services_digital_marketing} alt="" />
        <Link to="/services/digital-marketing" className="caption">
          <img src={detailsIcon} alt="" />
          <p>SEO, Google Ads, and email campaigns to drive traffic and leads.</p>
        </Link>
      </div>

      <div className="service">
        <h1>Social Media Marketing</h1>
        <img src={services_social_media_marketing} alt="" />
        <Link to="/services/social-media-marketing" className="caption">
          <img src={detailsIcon} alt="" />
          <p>Build your brand and connect with customers on social platforms.</p>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
