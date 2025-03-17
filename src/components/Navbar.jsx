
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">John Doe</a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <a href="#about" className="px-3 py-2 rounded-md hover:bg-gray-700">About</a>
            <a href="#skills" className="px-3 py-2 rounded-md hover:bg-gray-700">Skills</a>
            <a href="#experience" className="px-3 py-2 rounded-md hover:bg-gray-700">Experience</a>
            <a href="#projects" className="px-3 py-2 rounded-md hover:bg-gray-700">Projects</a>
            <a href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-700">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-700">About</a>
          <a href="#skills" className="block px-3 py-2 rounded-md hover:bg-gray-700">Skills</a>
          <a href="#experience" className="block px-3 py-2 rounded-md hover:bg-gray-700">Experience</a>
          <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
