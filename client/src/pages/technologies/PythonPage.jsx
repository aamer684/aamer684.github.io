import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const PythonPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Python Development Expertise</h1>
        <p className="technology-subtitle">
          Versatile, efficient, and powerful solutions built with Python.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, our Python developers bring deep expertise in building scalable and maintainable applications across a wide range of domains. Python’s simplicity and flexibility make it ideal for everything from web development and automation to data analysis and machine learning.
        </p>

        <p>
          We’ve successfully delivered Python-based solutions using frameworks like Django and Flask for web applications, as well as FastAPI for high-performance APIs. Our team also utilizes Python for scripting, backend services, and integration with cloud platforms and databases.
        </p>

        <p>
          In addition to traditional development, our Python specialists have experience in data engineering, using tools like Pandas, NumPy, and SQLAlchemy, and in building intelligent systems with libraries such as TensorFlow and scikit-learn.
        </p>

        <p>
          Whether you're developing a data-driven platform, automating workflows, or building AI-powered applications, our Python expertise ensures your solution is robust, efficient, and future-ready.
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

export default PythonPage;
