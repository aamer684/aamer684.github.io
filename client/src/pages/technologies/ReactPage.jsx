import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const ReactPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>React Development Expertise</h1>
        <p className="technology-subtitle">
          Crafting fast, interactive, and scalable user interfaces with React.
        </p>
      </div>

      <div className="technology-content">
        <p>
          Our team at DriveLogix has extensive experience in building modern web applications using React. Known for its component-based architecture and virtual DOM, React allows us to create highly responsive and maintainable user interfaces.
        </p>

        <p>
          We’ve delivered a wide range of React-based solutions, from real-time dashboards and admin panels to customer-facing portals and e-commerce platforms. Our developers are proficient in React Hooks, Context API, and advanced state management libraries like Redux and Zustand.
        </p>

        <p>
          We follow best practices in performance optimization, accessibility, and responsive design to ensure that every React application we build is fast, user-friendly, and scalable. Our team also integrates React seamlessly with REST APIs, GraphQL, and third-party services.
        </p>

        <p>
          Whether you're starting a new project or modernizing an existing one, our React expertise ensures a smooth development process and a high-quality end product.
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

export default ReactPage;
