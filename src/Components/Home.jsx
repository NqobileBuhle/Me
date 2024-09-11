import React from "react";
import "../index.css";
import myPic from '../Assets/profile.jpeg';
import { Link } from "react-scroll";
 import CV from "../Assets/Nqobile Biyela.docx"
const Home = () => {
    return (
        <section id="Intro" className="intro-section">
            <div className="intro-content">
                <div className="text-content">
                    <span className="hello">Hello, <br /></span>
                    <span className="intro-text">I'm <span className="intro-name">Nqobile</span> <br />FULL STACK <br /> SOFTWARE DEVELOPER</span>
                    <p className="intro-paragraph">I am a very passionate and skilled full stack developer.</p>
                    {/* <Link to="contact" smooth={true} duration={500}><button className="hire-btn">Hire Me</button></Link> */}
                    <a href={CV} download className="hire-btn" >Hire Me</a>
                </div>
                <div className="image-content">
                    <img className="profile-pic" src={myPic} alt="Profile" />
                </div>
            </div>
        </section>
    );
}

export default Home;