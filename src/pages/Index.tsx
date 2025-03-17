
import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Terminal from "../components/Terminal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <div className="fixed bottom-4 right-4 w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 h-96">
        <Terminal />
      </div>
    </div>
  );
};

export default Index;
