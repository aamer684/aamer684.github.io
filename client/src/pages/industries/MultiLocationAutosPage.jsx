import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const MultiLocationAutos = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Multi-Location Auto Business Solutions</h1>
        <p className="industry-subtitle">
          Centralized digital solutions for managing and scaling multi-location automotive businesses.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix helps multi-location auto businesses unify their operations, branding, and customer experience across all branches. Our enterprise-grade solutions are built for scalability and performance.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We build centralized dashboards, reporting tools, and CRM systems that give you full visibility and control across locations.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          We create unified digital experiences with location-aware features, online booking, and customer portals.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          Our marketing strategies are tailored to promote each location while maintaining consistent brand messaging.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          We manage multi-location social media campaigns, ensuring each branch connects with its local audience effectively.
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

export default MultiLocationAutos;
