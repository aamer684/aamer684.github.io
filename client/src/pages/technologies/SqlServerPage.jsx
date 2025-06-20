import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const SqlServerPage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Microsoft SQL Server Expertise</h1>
        <p className="technology-subtitle">
          Reliable, secure, and high-performance database solutions with SQL Server.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we have a strong foundation in Microsoft SQL Server, a trusted relational database platform used by enterprises worldwide. Our team has designed and maintained complex database systems that support mission-critical applications across various industries.
        </p>

        <p>
          We specialize in database design, performance tuning, stored procedures, indexing strategies, and data migration. Our developers are also experienced in integrating SQL Server with .NET applications, reporting tools like SSRS, and ETL processes using SSIS.
        </p>

        <p>
          Security, scalability, and data integrity are at the core of our SQL Server solutions. We implement best practices in backup and recovery, role-based access control, and high availability configurations to ensure your data is always protected and accessible.
        </p>

        <p>
          Whether you're building a new data-driven application or optimizing an existing database, our SQL Server expertise ensures your backend is robust, efficient, and future-ready.
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


export default SqlServerPage;
