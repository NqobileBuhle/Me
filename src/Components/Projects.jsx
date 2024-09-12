import React from 'react';
import drone from "../assets/drone.jpg";
import school from "../assets/school.jpg";
import car1 from "../assets/car.jpeg";

function Projects() {
  return (
    <section id='Projects' className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Projects Header */}
        <div className="text-center mb-12">
          <h1 className='text-4xl font-bold text-gray-800'>PROJECTS</h1>
        </div>

        {/* Portfolio Container */}
        <div className="portfolio_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
        </div>
      </div>
    </section>
  );
}

// Project Card Component
const ProjectCard = ({ image, title, liveLink, githubLink }) => {
    return (
      <article className='card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        <div className='overflow-hidden rounded-t-lg'>
          <img className='picture w-full h-56 object-cover' src={image} alt={title} />
        </div>
        <div className="p-6">
          <h2 className='card-disc text-2xl font-semibold text-gray-800 mb-4'>{title}</h2>
          <div className='details flex justify-between'>
            <a className='card-link-1 text-blue-500 hover:text-blue-700' href={liveLink} target='_blank' rel="noopener noreferrer">Live Demo</a>
            <a className='card-link-2 text-blue-500 hover:text-blue-700' href={githubLink} target='_blank' rel="noopener noreferrer">Github</a> {/* Fixed this line */}
          </div>
        </div>
      </article>
    );
  }

export default Projects
