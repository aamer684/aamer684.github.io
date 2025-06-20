import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const AutoMechanic = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Auto Mechanic Solutions</h1>
        <p className="industry-subtitle">
          Powering auto repair shops with smart technology and digital growth strategies.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix supports auto mechanic businesses with tools to manage diagnostics, service records, and customer communication. Our solutions are built to improve efficiency and customer satisfaction.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We develop systems for job tracking, parts ordering, and technician scheduling — all tailored to your shop’s needs.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          Give your customers the ability to book repairs, view service history, and receive updates through intuitive digital platforms.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          We help you grow your customer base through local SEO, paid ads, and online reputation management.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Share repair tips, showcase your work, and engage with your community on social media platforms.
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

export default AutoMechanic;
