import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const DotNetLanguagesPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>C# & VB .NET Development Expertise</h1>
        <p className="technology-subtitle">
          Building powerful, enterprise-grade applications with the .NET language family.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we have deep expertise in both C# and VB .NET—two of the most widely used languages in the Microsoft development ecosystem. Our team has successfully delivered a wide range of applications using these languages, from legacy systems to modern, cloud-connected platforms.
        </p>

        <p>
          C# is our go-to language for modern .NET development, offering strong typing, object-oriented design, and support for asynchronous programming. We use C# to build scalable web APIs, desktop applications, and cross-platform mobile apps using frameworks like ASP.NET Core, WPF, and .NET MAUI.
        </p>

        <p>
          VB .NET remains a valuable tool for maintaining and enhancing existing enterprise applications. Our developers are experienced in upgrading VB .NET systems, integrating them with newer technologies, and ensuring long-term maintainability and performance.
        </p>

        <p>
          Whether you're starting a new project in C#, maintaining a VB .NET application, or transitioning from one to the other, our team provides the technical depth and practical experience to deliver reliable, high-quality solutions tailored to your business needs.
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

export default DotNetLanguagesPage;
