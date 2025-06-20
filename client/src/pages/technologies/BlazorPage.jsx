import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const BlazorPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Blazor Development Expertise</h1>
        <p className="technology-subtitle">
          Building interactive web applications using C# and .NET with Blazor.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we leverage Blazor to build modern, interactive web applications using C# instead of JavaScript. Blazor enables full-stack web development with .NET, allowing our team to share code across client and server for faster development and better maintainability.
        </p>

        <p>
          Our developers are experienced in both Blazor Server and Blazor WebAssembly (WASM), giving us the flexibility to choose the right hosting model based on performance, scalability, and user experience requirements. We build rich UI components, integrate with REST APIs, and implement real-time features using SignalR.
        </p>

        <p>
          Blazor is ideal for organizations already invested in the Microsoft ecosystem. It allows seamless integration with ASP.NET Core, Entity Framework, and Azure services, making it a powerful choice for enterprise-grade applications.
        </p>

        <p>
          Whether you're transitioning from traditional .NET web forms or starting a new project, our Blazor expertise ensures a modern, maintainable, and high-performance solution tailored to your business needs.
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

export default BlazorPage;
