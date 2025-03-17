
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">Software Engineer</h3>
              <span className="experience-company">Tech Innovations Inc.</span>
              <span className="experience-date">2022 - Present</span>
            </div>
            <div className="experience-body">
              <p className="experience-description">
                Promoted from intern to full-time Software Engineer role. Leading front-end development 
                initiatives and collaborating with cross-functional teams to deliver high-quality web applications.
              </p>
              <ul className="experience-list">
                <li>Developed and maintained multiple React applications</li>
                <li>Implemented responsive design principles</li>
                <li>Collaborated with UX/UI designers and backend developers</li>
                <li>Mentored junior developers and interns</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">Software Engineering Intern</h3>
              <span className="experience-company">Tech Innovations Inc.</span>
              <span className="experience-date">2021 - 2022</span>
            </div>
            <div className="experience-body">
              <p className="experience-description">
                Worked on front-end development tasks, gaining hands-on experience with modern web technologies.
              </p>
              <ul className="experience-list">
                <li>Assisted in building UI components using React</li>
                <li>Participated in code reviews and team meetings</li>
                <li>Fixed bugs and improved application performance</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">Teaching Assistant</h3>
              <span className="experience-company">University of Technology</span>
              <span className="experience-date">2020 - Present</span>
            </div>
            <div className="experience-body">
              <p className="experience-description">
                Teaching assistant for undergraduate Web Development and Data Structures courses.
              </p>
              <ul className="experience-list">
                <li>Led lab sessions and provided one-on-one assistance to students</li>
                <li>Graded assignments and provided constructive feedback</li>
                <li>Created supplementary learning materials</li>
                <li>Held office hours to support student learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
