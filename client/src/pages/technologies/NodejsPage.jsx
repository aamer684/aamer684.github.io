import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const Nodejs = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Node.js Development Expertise</h1>
        <p className="technology-subtitle">
          Building fast, scalable, and event-driven backend systems with Node.js.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, our developers leverage Node.js to build high-performance backend services and APIs that power modern web and mobile applications. Known for its non-blocking, event-driven architecture, Node.js is ideal for real-time applications and microservices.
        </p>

        <p>
          Our team has implemented Node.js in a variety of use cases, including RESTful APIs, real-time chat systems, streaming services, and serverless functions. We use frameworks like Express.js and NestJS to accelerate development while maintaining clean, modular codebases.
        </p>

        <p>
          We also integrate Node.js with databases like MongoDB, PostgreSQL, and Redis, and ensure robust testing, logging, and monitoring practices are in place. Our solutions are designed to scale efficiently and handle high concurrency with minimal resource usage.
        </p>

        <p>
          Whether you're building a new backend from scratch or modernizing an existing system, our Node.js expertise ensures a fast, secure, and scalable foundation for your application.
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

export default Nodejs;
