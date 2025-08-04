'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <nav className="max-w-screen fixed top-0 left-0 right-0 z-50 bg-white shadow-md overflow-x-hidden w-full">
  <div className="mx-auto w-full px-4 py-3 flex justify-between items-center">
        {/* Name */}
        <h1 className="ml-4 md:ml-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xl md:text-2xl font-bold cursor-pointer font-splash">
          Muqadus
        </h1>

        {/* Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-blue-900 font-medium mr-4 md:mr-20">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
           <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <ul className="flex flex-col space-y-4 text-blue-900 font-medium min-h-screen mt-22 items-center">
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
             <li><a href="#certification" onClick={toggleMenu}>Certification</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
