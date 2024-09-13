import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/React1.jpeg";
import typescript from "../assets/typescript.png";
import plus from "../assets/c++.png";
import sql from "../assets/sql.jpeg";
import java2 from "../assets/java.png";
import coverB from '../assets/design.jpg';

// Variants for animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <section
      id='About'
      className="py-16 bg-gray-100 mb-6 mt-24"
      style={{ backgroundImage: `url(${coverB})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* About Section */}
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="content w-full md:w-2/3 md:pl-12 text-center" variants={fadeInUp}>
            <div className="about mb-12">
              <h2 className="text-3xl font-bold text-pink-800 mb-12 ">
                ABOUT ME
              </h2>
              <p className="text-white leading-relaxed text-bold">
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
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Skill Cards */}
                <SkillCard image={css} skillName="CSS" />
                <SkillCard image={html} skillName="HTML" />
                <SkillCard image={javascript} skillName="JavaScript" />
                <SkillCard image={react} skillName="React.JS" />
                <SkillCard image={typescript} skillName="TypeScript" />
                <SkillCard image={plus} skillName="C++" />
                <SkillCard image={sql} skillName="SQL/PLSQL" />
                <SkillCard image={java2} skillName="Java" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Skill Card Component with Animation
const SkillCard = ({ image, skillName }) => {
  return (
    <motion.article
      className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-cover bg-center bg-no-repeat'
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" }}
      variants={fadeInUp}
    >
      <img className='w-20 h-20 object-contain mb-4' src={image} alt={skillName} />
      <span className='text-pink-800 font-medium'>{skillName}</span>
    </motion.article>
  );
}

export default About;
