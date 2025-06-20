import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const PowerBIPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Power BI Expertise</h1>
        <p className="technology-subtitle">
          Transforming data into actionable insights with interactive dashboards and reports.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we empower organizations to make data-driven decisions through our expertise in Power BI. Our team has delivered dynamic dashboards and insightful reports that help clients visualize trends, monitor KPIs, and uncover opportunities across their operations.
        </p>

        <p>
          We specialize in connecting Power BI to a wide range of data sources, including SQL Server, Excel, cloud services, and APIs. Our developers are skilled in DAX, Power Query (M), and data modeling techniques that ensure accurate, efficient, and scalable analytics solutions.
        </p>

        <p>
          From executive dashboards to operational reports, we design Power BI solutions that are intuitive, visually compelling, and aligned with your business goals. We also implement row-level security, scheduled refreshes, and workspace governance to support enterprise-grade deployments.
        </p>

        <p>
          Whether you're just starting with Power BI or looking to enhance your existing analytics environment, DriveLogix can help you unlock the full potential of your data.
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

export default PowerBIPage;
