import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetail.css';

const MobileAppDevelopment = () => (
  <div className="service-detail-page">
    <h1>Mobile App Development</h1>
    <p>
      DriveLogix builds mobile applications that enhance customer engagement and streamline business operations. Whether you need a customer-facing app or an internal tool, we deliver intuitive and high-performance mobile solutions.
    </p>
    <p>
      Our apps are built for both iOS and Android platforms using native and cross-platform technologies. We focus on user experience, security, and scalability to ensure your app delivers value from day one.
    </p>
    <p>
      From booking systems to loyalty programs, our mobile apps help businesses stay connected with their customers anytime, anywhere.
    </p>
    <HashLink smooth to="/#services" className="nav-link">
      Back to Services
    </HashLink>
  </div>
);

export default MobileAppDevelopment;
