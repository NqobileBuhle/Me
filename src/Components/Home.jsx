import React from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import "../index.css";
import myPic from '../assets/profile.jpeg';
import CV from "../assets/Nqobile Biyela.docx";
import coverB from '../assets/design.jpg';

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.5 }
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 1 }
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.3, yoyo: Infinity }
  }
};

const Home = () => {
  return (
    <section
      id="Intro"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${coverB})` }}
    >
      {/* Main Content with Animation */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 max-w-6xl mx-auto bg-pink-200 shadow-lg rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Hello, <br />
            <span className="text-5xl md:text-6xl text-pink-600">I'm Nqobile</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            FULL STACK SOFTWARE DEVELOPER
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            I am a passionate and skilled full-stack developer with experience in crafting robust and scalable solutions.
          </p>
          <motion.div
            className="mt-6"
            variants={buttonVariants}
            whileHover="hover"
          >
            <a
              href={CV}
              download
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-md shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-gray-200 shadow-lg"
            src={myPic}
            alt="Profile"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

