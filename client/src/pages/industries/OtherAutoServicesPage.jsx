import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const OtherAutoServices = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Towing & Car Wash Solutions</h1>
        <p className="industry-subtitle">
          Digital tools for service-based automotive businesses like towing and car washes.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix supports towing companies and car wash businesses with technology that simplifies operations and enhances customer experience. Whether you're dispatching tow trucks or managing wash packages, we’ve got you covered.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We build dispatch systems, service tracking tools, and customer portals tailored to your business type.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          Enable customers to request towing, schedule washes, and track service status through modern digital interfaces.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          We help you attract more customers through local SEO, paid ads, and review management.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Promote your services, share customer testimonials, and run seasonal campaigns on social media.
        </p>
      </div>

      <div className="industry-navigation">
        <HashLink smooth to="/#industries" className="nav-link">
          Back to Industries
        </HashLink>
      </div>
    </div>
  );
};

export default OtherAutoServices;
