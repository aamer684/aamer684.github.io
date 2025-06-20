import React from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
  { title: 'Auto Mechanic Shops', slug: 'auto-mechanic-shops', icon: '🛠️' },
  { title: 'Tire & Lube Shops', slug: 'tire-lube-shops', icon: '🛞' },
  { title: 'Auto Parts Dealers', slug: 'auto-parts-dealers', icon: '🔧' },
  { title: 'Mobile Mechanic Shop', slug: 'mobile-mechanic-shop', icon: '🚐' },
  { title: 'Multi Location Business', slug: 'multi-location-business', icon: '🏢' },
  { title: 'Others (Towing, Car Washes)', slug: 'others-towing-car-washes', icon: '🧽' }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <Link to={`/industries/${industry.slug}`} key={index} className="industry-card">
            <div className="industry-icon">{industry.icon}</div>
            <h3 className="industry-name">{industry.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Industries;
