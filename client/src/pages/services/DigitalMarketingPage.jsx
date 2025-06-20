import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetail.css';

const DigitalMarketing = () => (
  <div className="service-detail-page">
    <h1>Digital Marketing</h1>
    <p>
      DriveLogix helps businesses grow online through strategic digital marketing campaigns. We specialize in SEO, Google Ads, email marketing, and content strategies that drive traffic and generate leads.
    </p>
    <p>
      Our team analyzes your market, identifies opportunities, and executes campaigns that deliver measurable results. Whether you're looking to increase visibility or boost conversions, we tailor our approach to your goals.
    </p>
    <p>
      With data-driven insights and continuous optimization, we ensure your digital marketing efforts deliver maximum ROI.
    </p>
    <HashLink smooth to="/#services" className="nav-link">
      Back to Services
    </HashLink>
  </div>
);

export default DigitalMarketing;
