import React from 'react'
import AboutPic from '../Assets/Nqobile.jpeg'
import drone from "../Assets/drone.jpg"
import css from "../Assets/css.png"
import html from "../Assets/html.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/React1.jpeg"
import typescript from "../Assets/typescript.png"
import plus from "../Assets/c++.png"
import sql from "../Assets/sql.jpeg"
import java2 from "../Assets/java.png"

const About = () => {
  return (
    
    <section id='About'>
      <div className="paragraph-container">
      <div className="Asset">
      {/* <img className="card-img-top" src={AboutPic} alt=" AboutPic"  /> */}
      </div>
      <div className="content">
        <div className="about">
          <h2>
            ABOUT ME
    
          </h2>
        </div>
        <div className="paragraph">
        <p >
         I'm  a passionate and dedicated software developer with a knack for turning 
         complex problems into elegant, efficient solutions. With a strong foundation 
         in JavaScript and a keen interest in developing innovative web applications, 
         I thrive on creating seamless user experiences and robust backend systems.
         I started my journey in software development 2 years ago, driven by a curiosity for technology 
         and a desire to make a tangible impact through code. Over the years, 
         I have honed my skills through various projects, both personal and professional, 
         constantly learning and adapting to new technologies and methodologies.
      </p>
       
      <div className="skills">
        <h2>
          MY SKILLS
        </h2>
        <div className="skill_container">


     <article className='card2'>
    <div>
        <img className='picture2' src={css} alt="" />
    </div>
   <span className='skill_name1'>CSS</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={html} alt="" />
    </div>
    <span className='skill_name1'>HTML</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={javascript} alt="" />
    </div>
    <span className='skill_name1'>Javascript</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={react} alt="" />
    </div>
    <span className='skill_name1'>React.JS</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={typescript} alt="" />
    </div>
    <span className='skill_name1'>Typescript</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={plus} alt="" />
    </div>
    <span className='skill_name1'>C++</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={sql} alt="" />
    </div>
    <span className='skill_name1'>SQL/PLSQL</span>
    

     </article>
     <article className='card2'>
    <div>
        <img className='picture2' src={java2} alt="" />
    </div>
    <span className='skill_name1'>Java</span>
    

     </article>
      
      </div>

        </div>
        
        
      </div>
    </div>
    </div>
    </section>
  );
}

export default About

