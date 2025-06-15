
import React from 'react';
import './Technologies.css';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Front End',
      technologies: ['React', 'Angular', 'Vue','Razor Pages', 'Web Forms']
    },
    {
      category: 'Back End',
      technologies: ['.Net Core', 'Node.js','Python']
    },
     {
      category: 'Desktop',
      technologies: ['Windows Forms', '.Net' , '.Net Core']
    },
    {
      category: 'Mobile',
      technologies: ['Maui', 'Xamarin' , 'Android']
    },
    {
      category: 'Cloud',
      technologies: ['Azure', 'Google Cloud']
    },
    {
      category: 'Database',
      technologies: ['MS Sql Server', 'MySQL', 'PostgreSQL', 'MongoDB']
    }
  ];

 return (
    <div className="technologies">
     {/*  <h2>Technologies</h2> */}
      <table className="outer-table">
        <tbody>
          {techCategories.map((category, index) => {
            const rows = Math.ceil(category.technologies.length / 3);
            return (
              <tr key={index}>
                <td className="category-cell"><strong>{category.category}</strong></td>
                <td className="details-cell">
                  <table className="inner-table">
                    <tbody>
                      {Array.from({ length: rows }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                          {Array.from({ length: 3 }).map((_, colIndex) => (
                            <td key={colIndex}>
                              {category.technologies[rowIndex * 3 + colIndex] || ''}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Technologies;
