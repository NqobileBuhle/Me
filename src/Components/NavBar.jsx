import React from "react";
// import NavBar from '../Components/NavBar.css';
// import { Link } from "react-router-dom";
import "../index.css";
import contactImg from '../Assets/contact.jpg';
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo">PORTFOLIO</span>
            </div>
            <div>
                <a className="nav-options" href="">HOME</a>
                <a className="nav-options" href="#About">ABOUT</a>
                <a className="nav-options" href="#Projects">PROJECTS</a>
                <a className="nav-options" href="#Contact">CONTACT</a>
            </div>
            <div className="social-icons">
                <a  className="social-icons-1" href="http://wa.me/0685119703" target="_blank"><FaWhatsapp /></a>
                <a className="social-icons-1" href="https://github.com/NqobileBuhle" target="_blank"><FaGithub /></a>
                <a className="social-icons-1" href="https://linkedin.com/in/nqobile-nobuhle-biyela-46702a24b" target="_blank"><CiLinkedin /></a>
            </div>



        </nav>
    )
}
export default NavBar; 
