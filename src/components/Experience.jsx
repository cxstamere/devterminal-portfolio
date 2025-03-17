
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Software Engineer Role */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <span className="text-gray-600">2022 - Present</span>
            </div>
            <p className="text-gray-700 mb-2">Innovative Solutions Ltd.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Promoted from internship to full-time role after demonstrating strong technical aptitude</li>
              <li>Designed and implemented microservices architecture for high-traffic applications</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Reduced API response times by 40% through optimized database queries</li>
            </ul>
          </div>

          {/* Software Engineering Intern */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <span className="text-gray-600">2021 - 2022</span>
            </div>
            <p className="text-gray-700 mb-2">Innovative Solutions Ltd.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Developed backend APIs using Node.js and Express</li>
              <li>Created automated testing suites with Jest</li>
              <li>Contributed to an open-source library for data visualization</li>
            </ul>
          </div>

          {/* Teaching Assistant Role */}
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-semibold">Teaching Assistant, Computer Science Dept.</h3>
              <span className="text-gray-600">2019 - 2021</span>
            </div>
            <p className="text-gray-700 mb-2">University of Technology</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Assisted professor in teaching Advanced Algorithms and Data Structures course</li>
              <li>Conducted weekly lab sessions and office hours for 80+ students</li>
              <li>Graded assignments and provided detailed feedback to improve student understanding</li>
              <li>Created supplementary learning materials and coding exercises</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
