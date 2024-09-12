import React from "react";
import "../index.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-purple-950 shadow-md fixed w-full z-10 ">
      {/* Logo Section */}
      <div className="logo text-2xl font-bold text-pink-800">
        <span>BIYELA.NN</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a className="nav-options text-pink-700 hover:text-pink-500 transition duration-300" href="#Intro">HOME</a>
        <a className="nav-options text-pink-700 hover:text-pink-500 transition duration-300" href="#About">ABOUT</a>
        <a className="nav-options text-pink-700 hover:text-pink-500 transition duration-300" href="#Projects">PROJECTS</a>
        <a className="nav-options text-pink-700 hover:text-pink-500 transition duration-300" href="#Contact">CONTACT</a>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons flex space-x-4">
        <a className="social-icons-1 text-pink-700 hover:text-pink-500 text-xl transition duration-300" href="http://wa.me/0685119703" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a className="social-icons-1 text-pink-700 hover:text-pink text-xl transition duration-300" href="https://github.com/NqobileBuhle" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className="social-icons-1 text-pink-700 hover:text-pink-700 text-xl transition duration-300" href="https://linkedin.com/in/nqobile-nobuhle-biyela-46702a24b" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
      </div>
    </nav>
  );
};

export default NavBar;
 
