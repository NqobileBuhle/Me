import React from 'react'
import drone from "../Assets/drone.jpg"
import school from "../Assets/school.jpg"
import car1 from "../Assets/car.jpeg"

function Projects() {
    return (
        <section id='Projects'>
        <div>

            <div>
                <h1 className='project'>PROJECTS</h1>
            </div>
            <div className="portfolio_container">


                <article className='card'>
                    <div>
                        <img className='picture' src={drone} alt="" />
                    </div>
                    <h2 className='card-disc'>Dronotics Website</h2>
                    <div className='details'>
                        <a className='card-link-1' href="">Live Demo</a>
                        <a className='card-link-2' href="https://github.com/NqobileBuhle/Dronoticz.git">Github</a>
                    </div>

                </article>

                <article className='card'>
                    <div>
                        <img className='picture' src={school} alt="" />
                    </div>
                    <h2 className='card-disc'>Schoolsite Website</h2>
                    <div>
                        <a className='card-link-1' href="tel:012345">Live Demo</a>
                        <a className='card-link-2' href="https://github.com/NqobileBuhle/school-site.git" target='_blank'>Github</a>
                    </div>

                </article>

                <article className='card'>
                    <div>
                        <img className='picture' src={car1} alt="" />
                    </div>
                    <h2 className='card-disc'>Online Cars Project</h2>
                    <div>
                        <a className='card-link-1' href="">Live Demo</a>
                        <a className='card-link-2' href="https://github.com/NqobileBuhle/Online-Cars-Project.git">Github</a>
                    </div>

                </article>
            </div>
        </div>
        </section>

    );
}

export default Projects;
