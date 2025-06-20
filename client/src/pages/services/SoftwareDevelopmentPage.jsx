import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetail.css';

const SoftwareDevelopment = () => (
  <div className="service-detail-page">
    <h1>Software Development</h1>
    <p>
      At DriveLogix, we specialize in building custom software solutions that solve real business problems. Whether you're looking to automate internal processes, manage customer relationships, or launch a new digital product, our team delivers scalable and secure software tailored to your needs.
    </p>
    <p>
      Our development process is collaborative and agile. We work closely with you to understand your goals, define requirements, and deliver high-quality software on time and within budget. From desktop applications to cloud-based platforms, we bring your ideas to life with precision and innovation.
    </p>
    <p>
      We use modern technologies and best practices to ensure your software is maintainable, extensible, and future-proof. Our services include system architecture, UI/UX design, API development, database design, and full-stack engineering.
    </p>
    <p>
      Whether you're a startup or an established enterprise, DriveLogix is your trusted partner for building software that drives growth and efficiency.
    </p>
    <HashLink smooth to="/#services" className="nav-link">
      Back to Services
    </HashLink>
  </div>
);

export default SoftwareDevelopment;
