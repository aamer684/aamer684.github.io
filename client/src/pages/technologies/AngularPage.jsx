import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css'; // Shared styling for all tech pages

const AngularPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Angular Development Expertise</h1>
        <p className="technology-subtitle">
          Building dynamic, scalable, and high-performance web applications with Angular.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we have a dedicated team of developers with deep expertise in Angular, one of the most powerful front-end frameworks in the industry. Our professionals have successfully delivered a wide range of projects using Angular, from enterprise-grade dashboards to responsive single-page applications (SPAs).
        </p>

        <p>
          Our Angular specialists are proficient in the latest versions of the framework and follow best practices in component-based architecture, reactive programming with RxJS, and state management using tools like NgRx. We emphasize clean code, modular design, and performance optimization to ensure that every Angular application we build is robust, maintainable, and scalable.
        </p>

        <p>
          Whether you're looking to modernize an existing application or build a new one from scratch, our team can help you leverage Angular’s full potential to create seamless user experiences and efficient development workflows.
        </p>

        <p>
          We take pride in our collaborative approach, working closely with clients to understand their goals and deliver solutions that align with their business objectives. With a proven track record in Angular development, DriveLogix is your trusted partner for front-end excellence.
        </p>
      </div>
      <div className="technology-navigation">
                  <HashLink smooth to="/#technologies" className="nav-link">
                      Back to Technologies
                  </HashLink>
              </div>
    </div>
  );
};

export default AngularPage;
