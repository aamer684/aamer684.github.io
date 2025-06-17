import React from 'react';
import './Technologies.css';

const Technologies = () => {
  const techCategories = [
    { category: 'Front End', technologies: ['Asp .Net Razor Pages', 'HTML, CSS', 'Bootstrap','React', 'Angular', 'JavaScript', 'Blazor', 'Web Forms'] },
    { category: 'Back End', technologies: ['ASP .Net Core', 'Web API', 'Node.js', 'C#', 'VB .Net', 'Web Services', 'Asp .Net', 'Python'] },
    { category: 'Desktop', technologies: ['Windows Forms', '.Net', '.Net Core'] },
    { category: 'Mobile', technologies: ['Maui', 'Xamarin', 'Android'] },
    { category: 'Cloud', technologies: ['Azure', 'Google Cloud'] },
    { category: 'Database', technologies: ['MS SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'] },
    { category: 'Data & Reporting', technologies: ['SSRS', 'Power BI', 'SSIS', 'ADF'] }
  ];

  return (
    <div className="technologies">
      <h2>We have experts in these areas</h2>
      <div className="tech-grid">
        {techCategories.map((cat, index) => (
          <div className="tech-card" key={index}>
            <h3>{cat.category}</h3>
            <ul>
              {cat.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
