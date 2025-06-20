import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetail.css';

const WebDevelopment = () => (
  <div className="service-detail-page">
    <h1>Web Development</h1>
    <p>
      At DriveLogix, we craft custom websites that are visually engaging, user-friendly, and optimized for performance. Whether you're launching a new brand or upgrading an existing site, our web development services are tailored to meet your business goals.
    </p>
    <p>
      We specialize in responsive design, SEO-friendly architecture, and seamless integrations with third-party tools. Our team uses modern frameworks and CMS platforms to ensure your website is scalable, secure, and easy to manage.
    </p>
    <p>
      From e-commerce platforms to service-based websites, we build digital experiences that convert visitors into loyal customers.
    </p>
    <HashLink smooth to="/#services" className="nav-link">
      Back to Services
    </HashLink>
  </div>
);

export default WebDevelopment;
