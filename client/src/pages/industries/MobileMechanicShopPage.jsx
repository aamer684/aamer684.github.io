import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const MobileMechanicShop = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Mobile Mechanic Solutions</h1>
        <p className="industry-subtitle">
          Helping mobile mechanics manage bookings, routes, and customer communication on the go.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix empowers mobile mechanic businesses with tools to manage their operations from anywhere. We help you stay organized, visible, and connected with your customers.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          From route planning to service logs and digital invoicing, we build systems that support your mobile-first business model.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          We create mobile-friendly platforms where customers can request service, track your arrival, and pay securely online.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          We help you rank in local searches and run targeted ads to reach customers in your service area.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Build trust and visibility by sharing real-time updates, customer testimonials, and service tips on social media.
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

export default MobileMechanicShop;
