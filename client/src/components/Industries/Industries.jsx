import React from 'react';
import './Industries.css';

const industries = [
  { title: 'Auto Mechanics', icon: '🛠️' },
  { title: 'Tire Shops', icon: '🛞' },
  { title: 'Auto Parts Dealers', icon: '🔧' },
  { title: 'Car Detailers', icon: '🚗' },
  { title: 'Taxi & Transport Services', icon: '🚕' },
  { title: 'Others (Towing, Car Washes)', icon: '🧽' }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <div className="industry-icon">{industry.icon}</div>
            <h3 className="industry-name">{industry.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
