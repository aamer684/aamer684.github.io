import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const MongoDBPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>MongoDB Expertise</h1>
        <p className="technology-subtitle">
          Flexible, scalable, and high-performance NoSQL solutions with MongoDB.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we use MongoDB to build modern, data-driven applications that require flexibility, scalability, and speed. As a leading NoSQL database, MongoDB allows us to model complex data structures and scale horizontally with ease.
        </p>

        <p>
          Our team has implemented MongoDB in a variety of use cases, including real-time analytics platforms, content management systems, and IoT applications. We design efficient schemas, optimize queries, and implement indexing strategies to ensure high performance.
        </p>

        <p>
          We also integrate MongoDB with Node.js, Python, and .NET applications, and use tools like Mongoose and Atlas for advanced data modeling and cloud deployment. Our solutions are built with security, reliability, and future growth in mind.
        </p>

        <p>
          Whether you're starting a new project or migrating from a relational database, our MongoDB expertise ensures a smooth transition and a powerful data foundation.
        </p>
      </div>

      <div className="technology-navigation">
        <HashLink smooth to="/#technologies" className="nav-link">
          ← Back to Technologies
        </HashLink>
      </div>
    </div>
  );
};

export default MongoDBPage;
