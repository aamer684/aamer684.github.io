import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './IndustryDetail.css'; // Shared styling for all industry pages

const TireLubeShops = () => {
  return (
    <div className="industry-detail-page">
      <div className="industry-header">
        <h1>Tire Shop Solutions</h1>
        <p className="industry-subtitle">
          Empowering tire businesses with modern technology, digital presence, and customer engagement tools.
        </p>
      </div>

      <div className="industry-content">
        <p>
          At DriveLogix, we specialize in delivering tailored digital solutions for tire shops. Whether you're a single-location business or a growing chain, our services are designed to help you streamline operations, attract more customers, and build a strong online presence.
        </p>

        <h3>🔧 Custom Software Development</h3>
        <p>
          We build custom software that fits your tire shop’s unique workflow — from inventory tracking and appointment scheduling to customer management and invoicing. Our solutions are scalable, secure, and easy to use.
        </p>

        <h3>🌐 Web & Mobile App Development</h3>
        <p>
          Our team creates responsive websites and mobile apps that allow your customers to book services, browse tire catalogs, and receive real-time updates. We ensure your digital platforms are fast, mobile-friendly, and optimized for search engines.
        </p>

        <h3>📈 Digital Marketing</h3>
        <p>
          We help tire shops grow their customer base through targeted digital marketing strategies. From Google Ads to local SEO, we ensure your business appears where your customers are searching.
        </p>

        <h3>📱 Social Media Marketing</h3>
        <p>
          Build brand loyalty and engage with your community through social media. We manage your presence on platforms like Facebook, Instagram, and TikTok — creating content, running promotions, and responding to customer inquiries.
        </p>

        <p>
          With DriveLogix as your technology partner, your tire shop can stay ahead of the competition and deliver a seamless experience to your customers — both online and in-store.
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

export default TireLubeShops;
