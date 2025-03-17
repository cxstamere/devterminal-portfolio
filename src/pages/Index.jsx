
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

const Index = () => {
  useEffect(() => {
    // Scroll to hash element on load if URL contains hash
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>© 2023 Developer Portfolio. All rights reserved.</p>
            </div>
            
            <div className="footer-links">
              <a href="https://github.com" className="footer-link" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" className="footer-link" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com" className="footer-link" target="_blank" rel="noreferrer">Twitter</a>
              <a href="mailto:johndoe@example.com" className="footer-link">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
