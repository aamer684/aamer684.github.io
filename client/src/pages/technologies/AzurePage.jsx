import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TechnologyDetail.css';

const AzurePage = () => {
  return (
    <div className="technology-detail-page">
      <div className="technology-header">
        <h1>Microsoft Azure Expertise</h1>
        <p className="technology-subtitle">
          Scalable, secure, and cloud-native solutions powered by Microsoft Azure.
        </p>
      </div>

      <div className="technology-content">
        <p>
          At DriveLogix, we help businesses harness the full potential of Microsoft Azure to build, deploy, and manage applications in the cloud. Our team has hands-on experience with a wide range of Azure services, including App Services, Azure Functions, Azure SQL, and Azure DevOps.
        </p>

        <p>
          We specialize in designing cloud-native architectures that are scalable, resilient, and cost-effective. Whether you're migrating legacy systems to the cloud or building new applications from the ground up, our Azure-certified professionals ensure a seamless and secure transition.
        </p>

        <p>
          Our expertise extends to implementing CI/CD pipelines, managing infrastructure with Infrastructure as Code (IaC) using ARM templates or Bicep, and integrating Azure with on-premises systems. We also provide guidance on governance, compliance, and cost optimization.
        </p>

        <p>
          With a strong focus on performance, security, and automation, DriveLogix delivers Azure solutions that empower your business to innovate faster and operate more efficiently in the cloud.
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

export default AzurePage;
