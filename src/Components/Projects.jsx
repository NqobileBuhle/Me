import React from 'react';
import { motion } from 'framer-motion';  
import drone from "../assets/drone.jpg";
import school from "../assets/school.jpg";
import car1 from "../assets/car.jpeg";
import newProjectImage from "../assets/design.jpg";  // New project image
import coverB from '../assets/design.jpg';
import me from '../assets/Nqoh.jpeg'
import project from '../assets/Nqobile.jpeg'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Projects() {
  return (
    <section
      id='Projects'
      className="py-16 bg-white"
      style={{ backgroundImage: `url(${coverB})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Projects Header */}
        <div className="text-center mb-12">
          <h1 className='text-4xl font-bold text-pink-800'>PROJECTS</h1>
        </div>

        {/* Portfolio Container */}
        <motion.div 
          className="portfolio_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Project Cards */}
          <ProjectCard 
            image={drone} 
            title="Dronotics Website" 
            liveLink="" 
            githubLink="https://github.com/NqobileBuhle/Dronoticz.git" 
          />
          <ProjectCard 
            image={school} 
            title="Schoolsite Website" 
            liveLink="tel:012345" 
            githubLink="https://github.com/NqobileBuhle/school-site.git" 
          />
          <ProjectCard 
            image={car1} 
            title="Online Cars Project" 
            liveLink="" 
            githubLink="https://github.com/NqobileBuhle/Online-Cars-Project.git" 
          />
          {/* New Project Card */}
          <ProjectCard 
            image={newProjectImage}  // New project image
            title="New Project" 
            liveLink="https://example.com"  // Example live link
            githubLink="https://github.com/NqobileBuhle/New-Project.git"  // Example GitHub link
          />
           <ProjectCard 
            image={me}  // New project image
            title="New Project" 
            liveLink="https://example.com"  // Example live link
            githubLink="https://github.com/NqobileBuhle/New-Project.git"  // Example GitHub link
          />
           <ProjectCard 
            image={project}  // New project image
            title="New Project" 
            liveLink="https://example.com"  // Example live link
            githubLink="https://github.com/NqobileBuhle/New-Project.git"  // Example GitHub link
          />
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component with Animations
const ProjectCard = ({ image, title, liveLink, githubLink }) => {
  return (
    <motion.article
      className='bg-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)" }}  // Hover Effect
      variants={fadeInUp}
    >
      <div className='overflow-hidden rounded-t-lg'>
        <img className='picture w-full h-56 object-cover' src={image} alt={title} />
      </div>
      <div className="p-6">
        <h2 className='card-disc text-2xl font-semibold text-purple-950 mb-4'>{title}</h2>
        <div className='details flex justify-between'>
          {liveLink ? (
            <a className='card-link-1 text-pink-300 hover:text-pink-700' href={liveLink} target='_blank' rel="noopener noreferrer">Live Demo</a>
          ) : (
            <span className='card-link-1 text-pink-300'>No Live Demo</span>
          )}
          <a className='card-link-2 text-pink-500 hover:text-pink-700' href={githubLink} target='_blank' rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;


