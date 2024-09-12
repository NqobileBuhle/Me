import React from "react";
import "../index.css";
import myPic from '../assets/profile.jpeg';
import { Link } from "react-scroll";
import CV from "../assets/Nqobile Biyela.docx";

const Home = () => {
  return (
    <section id="Intro" className="intro-section h-screen bg-gray-100 flex items-center justify-center">
      <div className="intro-content flex flex-col md:flex-row items-center justify-between p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="text-content text-center md:text-left">
          <span className="hello text-3xl md:text-4xl font-bold text-gray-800">Hello, <br /></span>
          <span className="intro-text text-2xl md:text-3xl font-semibold text-gray-800">
            I'm <span className="intro-name text-blue-500">Nqobile</span> <br />
            FULL STACK <br /> SOFTWARE DEVELOPER
          </span>
          <p className="intro-paragraph mt-4 text-gray-600">I am a very passionate and skilled full stack developer.</p>
          <div className="mt-6">
            {/* <Link to="contact" smooth={true} duration={500}><button className="hire-btn bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">Hire Me</button></Link> */}
            <a href={CV} download className="hire-btn bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">Download CV</a>
          </div>
        </div>
        <div className="image-content mt-8 md:mt-0 md:ml-8">
          <img className="profile-pic w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" src={myPic} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
