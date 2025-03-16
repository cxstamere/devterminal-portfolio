
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Vue.js', 'Django', 'Bootstrap', 'jQuery']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'Babel', 'NPM', 'Yarn']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis']
    },
    {
      title: 'Other',
      skills: ['RESTful APIs', 'GraphQL', 'Responsive Design', 'TDD', 'Agile/Scrum', 'CI/CD', 'AWS', 'Heroku']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">skills</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=></span> {`{`}</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
