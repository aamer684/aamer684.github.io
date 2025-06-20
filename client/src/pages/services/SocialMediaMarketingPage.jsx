import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ServiceDetail.css';

const SocialMediaMarketing = () => (
  <div className="service-detail-page">
    <h1>Social Media Marketing</h1>
    <p>
      DriveLogix helps brands build meaningful connections with their audience through social media. We manage your presence on platforms like Facebook, Instagram, LinkedIn, and TikTok — creating content that resonates and drives engagement.
    </p>
    <p>
      Our services include content creation, campaign management, influencer outreach, and analytics reporting. We help you grow your followers, increase brand awareness, and convert engagement into business results.
    </p>
    <p>
      Whether you're launching a new product or building a community, our social media strategies are designed to amplify your voice and reach.
    </p>
    <HashLink smooth to="/#services" className="nav-link">
      Back to Services
    </HashLink>
  </div>
);

export default SocialMediaMarketing;
