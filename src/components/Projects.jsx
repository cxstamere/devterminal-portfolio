
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product listing, cart functionality, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      tags: ['Vue.js', 'Firebase', 'Vuetify'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard showing current conditions and forecasts with data visualization.',
      tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A developer portfolio website with terminal-inspired design, responsive layout, and interactive elements.',
      tags: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Recipe Finder',
      description: 'A web application that allows users to search for recipes based on ingredients they have on hand.',
      tags: ['JavaScript', 'API Integration', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Budget Tracker',
      description: 'A personal finance application to track income, expenses, and budget goals with data visualization.',
      tags: ['React', 'Chart.js', 'LocalStorage'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="keyword">const</span> <span className="variable">projects</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    <span className="keyword">github</span>
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                    <span className="function">live demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
