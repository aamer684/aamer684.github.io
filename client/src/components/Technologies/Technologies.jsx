import React from 'react';
import { Link } from 'react-router-dom';
import './Technologies.css';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'ASP Dot Net Core', icon: '🌐' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'C#, VB .Net', icon: '💻' },
  { name: 'Azure', icon: '☁️' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Power BI', icon: '📊' },
  { name: 'Xamarin', icon: '📱' },
  { name: 'Blazor', icon: '🧩' },
];

// Utility to convert names to URL-friendly slugs
const slugify = (name) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace('#', 'sharp');

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h2 className="technologies-title">Technologies We Work With</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => {
          // Custom route logic
          let routePath = `/technologies/${slugify(tech.name)}`;

          // Example condition: if tech.name includes "C#" or "VB"
          if (tech.name.toLowerCase().includes('c#') || tech.name.toLowerCase().includes('vb')) {
            routePath = '/technologies/dotnet-languages';
          }

          return (
            <Link to={routePath} key={index} className="technology-card">
              <div className="technology-icon">{tech.icon}</div>
              <h3 className="technology-name">{tech.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
