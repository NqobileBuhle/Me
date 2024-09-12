import React from 'react';
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/React1.jpeg";
import typescript from "../assets/typescript.png";
import plus from "../assets/c++.png";
import sql from "../assets/sql.jpeg";
import java2 from "../assets/java.png";

const About = () => {
  return (
    <section id='About' className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* About Section */}
        <div className="flex flex-col items-center">
          <div className="content w-full md:w-2/3 md:pl-12 text-center">
            <div className="about mb-6">
              <h2 className="text-3xl font-bold text-pink-800 mb-4">
                ABOUT ME
              </h2>
              <p className="text-gray-700 leading-relaxed text-bold">
                I'm a passionate and dedicated software developer with a knack for turning
                complex problems into elegant, efficient solutions. With a strong foundation
                in JavaScript and a keen interest in developing innovative web applications,
                I thrive on creating seamless user experiences and robust backend systems.
                I started my journey in software development 2 years ago, driven by a curiosity for technology
                and a desire to make a tangible impact through code. Over the years,
                I have honed my skills through various projects, both personal and professional,
                constantly learning and adapting to new technologies and methodologies.
              </p>
            </div>
            {/* Skills Section */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-pink-800 mb-6">
                MY SKILLS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Skill Cards */}
                <SkillCard image={css} skillName="CSS" />
                <SkillCard image={html} skillName="HTML" />
                <SkillCard image={javascript} skillName="JavaScript" />
                <SkillCard image={react} skillName="React.JS" />
                <SkillCard image={typescript} skillName="TypeScript" />
                <SkillCard image={plus} skillName="C++" />
                <SkillCard image={sql} skillName="SQL/PLSQL" />
                <SkillCard image={java2} skillName="Java" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skill Card Component
const SkillCard = ({ image, skillName }) => {
  return (
    <article className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <img className='w-20 h-20 object-contain mb-4' src={image} alt={skillName} />
      <span className='text-pink-800 font-medium'>{skillName}</span>
    </article>
  );
}

export default About;



