import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const AspNetCorePage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>ASP .NET Core Development Expertise</h1>
        <p className="technology-subtitle">
          Building secure, high-performance, and cross-platform web applications with ASP .NET Core.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we specialize in developing robust and scalable web applications using ASP .NET Core, Microsoft’s modern, open-source framework. Our team has extensive experience building enterprise-grade solutions that are secure, maintainable, and optimized for performance.
        </p>

        <p>
          ASP .NET Core allows us to create cross-platform applications that run seamlessly on Windows, Linux, and macOS. We leverage its modular architecture, built-in dependency injection, and powerful middleware pipeline to build APIs, web apps, and microservices that meet the demands of modern businesses.
        </p>

        <p>
          Our developers are proficient in integrating ASP .NET Core with Entity Framework Core, SQL Server, Azure services, and third-party APIs. We also implement best practices in authentication, authorization, and application security using Identity and JWT.
        </p>

        <p>
          Whether you're building a new SaaS platform, modernizing a legacy .NET application, or developing a secure API backend, our ASP .NET Core expertise ensures a future-ready solution tailored to your business needs.
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

export default AspNetCorePage;
