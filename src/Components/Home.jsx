import React from "react";
import Slider from "react-slick";
import "../index.css";
import myPic from '../assets/profile.jpeg';
import CV from "../assets/Nqobile Biyela.docx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow slick-next`}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.5)" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-pink-500" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow slick-prev`}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.5)" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-pink-500" />
      </div>
    );
  }

  return (
    <section id="Intro" className="relative h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Hello, <br />
            <span className="text-5xl md:text-6xl text-pink-600">I'm Nqobile</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            FULL STACK SOFTWARE DEVELOPER
          </h2>
          <p className="mt-4  text-gray-700 text-lg">
            I am a passionate and skilled full-stack developer with experience in crafting robust and scalable solutions.
          </p>
          <div className="mt-6">
            <a 
              href={CV} 
              download 
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-md shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Slider {...settings}>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-gray-200 shadow-lg" src={myPic} alt="Profile" />
            </div>
            {/* Add more slides here */}
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-gray-200 shadow-lg" src={myPic} alt="Profile" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Home;
