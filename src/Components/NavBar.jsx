import React, { useState } from "react";
import "../index.css";
import { FaWhatsapp, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-purple-950 shadow-md fixed w-full z-10">
      
      <div className="logo text-2xl font-bold text-pink-800">
        <span>NN.BIYELA</span>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-pink-700 focus:outline-none text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-purple-950 md:bg-transparent md:py-0 py-4 px-8 md:px-0`}
      >
        <a
          className="nav-options text-pink-700 hover:text-pink-500 transition duration-300"
          href="#Intro"
        >
          HOME
        </a>
        {/* <a
          className="nav-options text-pink-700 hover:text-pink-500 transition duration-300"
          href="#About"
        >
          ABOUT
        </a> */}
        <a
          className="nav-options text-pink-700 hover:text-pink-500 transition duration-300"
          href="#Projects"
        >
          PROJECTS
        </a>
        <a
          className="nav-options text-pink-700 hover:text-pink-500 transition duration-300"
          href="#Contact"
        >
          CONTACT
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons hidden md:flex space-x-4">
        <a
          className="social-icons-1 text-pink-700 hover:text-pink-500 text-xl transition duration-300"
          href="http://wa.me/0685119703"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          className="social-icons-1 text-pink-700 hover:text-pink text-xl transition duration-300"
          href="https://github.com/NqobileBuhle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="social-icons-1 text-pink-700 hover:text-pink-700 text-xl transition duration-300"
          href="https://linkedin.com/in/nqobile-nobuhle-biyela-46702a24b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

 
