import React, { useState, useEffect } from 'react';
import { RiFacebookCircleFill, RiGithubLine, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react";


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4  pt-3  pb-3   md:pt-6 flex  justify-between md:justify-end items-center ">
        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex space-x-8 text-white mx-auto">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/p-madhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          ><RiLinkedinFill size={20} />
          </a>
          <a
            href="https://github.com/mk070"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          ><RiGithubLine size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex float-end flex-end  items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white absolute top-0 text-lg leading-10 left-0 w-2/3 h-screen transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6 mt-16 ml-6">
          <li>
            <a
              href="/"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li className="flex space-x-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
