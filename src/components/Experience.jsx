
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="keyword">const</span> <span className="variable">experience</span> <span className="operator">=</span> <span className="punctuation">[</span> ... <span className="punctuation">]</span>
        </h2>
        
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">Software Engineer</h3>
              <span className="experience-company">Innovate Tech Solutions</span>
              <span className="experience-duration">June 2022 - Present</span>
            </div>
            <div className="experience-details">
              <p>Transitioned from internship to full-time role after demonstrating strong technical skills and project contributions.</p>
              <ul className="experience-responsibilities">
                <li>Lead development of the company's core React-based client dashboard, improving performance by 40%</li>
                <li>Collaborate with cross-functional teams to implement new features and resolve technical debt</li>
                <li>Architected and deployed microservices using Node.js and Docker, enhancing system scalability</li>
                <li>Mentor junior developers and interns, providing code reviews and technical guidance</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">Software Engineering Intern</h3>
              <span className="experience-company">Innovate Tech Solutions</span>
              <span className="experience-duration">January 2022 - June 2022</span>
            </div>
            <div className="experience-details">
              <p>Worked on front-end development for the company's client dashboard application.</p>
              <ul className="experience-responsibilities">
                <li>Developed responsive UI components using React and Tailwind CSS</li>
                <li>Integrated REST APIs and implemented state management with Redux</li>
                <li>Participated in agile development processes including daily stand-ups and sprint planning</li>
                <li>Contributed to the implementation of automated testing with Jest and React Testing Library</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">Teaching Assistant - Web Development</h3>
              <span className="experience-company">University of Technology</span>
              <span className="experience-duration">September 2021 - December 2022</span>
            </div>
            <div className="experience-details">
              <p>Assisted professor in teaching modern web development concepts to undergraduate students.</p>
              <ul className="experience-responsibilities">
                <li>Led hands-on lab sessions covering HTML, CSS, JavaScript, and React</li>
                <li>Provided one-on-one mentoring during office hours, helping students debug and improve their code</li>
                <li>Graded assignments and projects, providing detailed feedback to help students improve</li>
                <li>Created supplementary learning materials and coding challenges to reinforce classroom concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
