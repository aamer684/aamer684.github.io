import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css';

const LubeShops = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Lube Shop Solutions</h1>
        <p className="industry-subtitle">
          Streamlining operations and boosting visibility for oil change and lube service providers.
        </p>
      </div>

      <div className="industry-content">
        <p>
          DriveLogix offers tailored digital solutions for lube shops, helping you manage appointments, customer records, and service history with ease. Our tools are designed to improve efficiency and customer satisfaction.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We develop systems for service tracking, inventory management, and customer retention — all customized to your shop’s workflow.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          Let your customers book oil changes online, get service reminders, and access loyalty rewards through a sleek website or mobile app.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          We help you attract new customers through local SEO, Google Ads, and review management strategies tailored for quick-service shops.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Promote seasonal offers, share maintenance tips, and engage with your community on platforms like Facebook and Instagram.
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

export default LubeShops;
