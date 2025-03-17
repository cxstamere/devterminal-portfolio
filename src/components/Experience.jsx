
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Promoted from intern to full-time Software Engineer role. Leading front-end development initiatives and collaborating with cross-functional teams to deliver high-quality web applications.',
      responsibilities: [
        'Developed and maintained multiple React applications',
        'Implemented responsive design principles',
        'Collaborated with UX/UI designers and backend developers',
        'Mentored junior developers and interns'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Tech Innovations Inc.',
      period: '2021 - 2022',
      description: 'Worked on front-end development tasks, gaining hands-on experience with modern web technologies.',
      responsibilities: [
        'Assisted in building UI components using React',
        'Participated in code reviews and team meetings',
        'Fixed bugs and improved application performance'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Technology',
      period: '2020 - Present',
      description: 'Teaching assistant for undergraduate Web Development and Data Structures courses.',
      responsibilities: [
        'Led lab sessions and provided one-on-one assistance to students',
        'Graded assignments and provided constructive feedback',
        'Created supplementary learning materials',
        'Held office hours to support student learning'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="keyword">const</span> <span className="variable">experience</span> <span className="operator">=</span> <span className="function">()</span> <span className="operator">=&gt;</span> {'{'}
        </h2>
        
        <div className="projects-grid">
          {experiences.map((exp, index) => (
            <Card key={index} className="project-card bg-terminal-bg border-border hover:border-accent">
              <CardHeader className="pb-2">
                <CardTitle className="text-function text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-variable font-medium">{exp.company}</CardDescription>
                <span className="text-comment text-sm">{exp.period}</span>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-foreground text-sm mb-3">{exp.description}</p>
                <ul className="text-sm space-y-1">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-foreground">
                      <span className="text-accent">•</span> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
