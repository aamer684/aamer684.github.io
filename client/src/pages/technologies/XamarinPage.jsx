import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const XamarinPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Xamarin Development Expertise</h1>
        <p className="technology-subtitle">
          Cross-platform mobile apps with native performance using Xamarin and .NET.
        </p>
      </div>

      <div className="technology-content">
        <p>
          DriveLogix has a strong track record in building cross-platform mobile applications using Xamarin. With Xamarin, we write shared C# code that runs on both Android and iOS, reducing development time while maintaining native performance and user experience.
        </p>

        <p>
          Our Xamarin developers are skilled in Xamarin.Forms and Xamarin.Native, allowing us to tailor the UI and functionality based on project needs. We integrate mobile apps with REST APIs, local databases, and cloud services like Azure and Firebase.
        </p>

        <p>
          We also implement features like push notifications, offline sync, and device-specific capabilities, ensuring a seamless and engaging experience for end users. Our apps are built with scalability, maintainability, and performance in mind.
        </p>

        <p>
          Whether you're launching a new mobile product or extending your existing platform to mobile, our Xamarin expertise helps you deliver high-quality apps across platforms with a single codebase.
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

export default XamarinPage;
