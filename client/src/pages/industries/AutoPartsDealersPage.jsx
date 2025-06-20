import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const AutoPartsDealers = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Auto Parts Dealer Solutions</h1>
        <p className="industry-subtitle">
          Helping auto parts businesses digitize inventory, sales, and customer engagement.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix provides digital tools for auto parts dealers to manage stock, streamline orders, and connect with customers online. Our solutions are designed for both retail and wholesale operations.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We build inventory systems, order management platforms, and B2B portals tailored to your business model.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          We create e-commerce websites and mobile apps that allow customers to search, compare, and purchase parts easily.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          Our marketing strategies help you reach mechanics, garages, and DIY customers through targeted campaigns.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Promote new arrivals, offer discounts, and educate your audience about auto parts through engaging content.
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

export default AutoPartsDealers;
