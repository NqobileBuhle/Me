import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { motion } from 'framer-motion';  // Import Framer Motion
import coverB from '../assets/design.jpg';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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

const Contact = () => {
  return (
    <section
      id="Contact"
      className="py-16 bg-gray-100 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${coverB})` }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-pink-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          LET'S GET IN TOUCH!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Options */}
          <div className="space-y-8">
            <ContactOption
              Icon={MdEmail}
              title="Email"
              details="nqobilebiyela3@gmail.com"
              linkText="Send Email"
              href="mailto:NqobileBiyela3@gmail.com"
            />
            <ContactOption
              Icon={FaPhoneAlt}
              title="Phone"
              details="0685119703"
              linkText="Call Me"
              href="tel:+0685119703"
            />
            <ContactOption
              Icon={CiFacebook}
              title="Facebook"
              details=""
              linkText="Send Message"
              href="https://www.facebook.com/nqobilebiyela3"
            />
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 shadow-md rounded-lg"
            variants={fadeInUp}
          >
            <form className="space-y-4">
              <input
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                type="text"
                placeholder="Your Full Name"
              />
              <input
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                rows="4"
                placeholder="Message"
              ></textarea>
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-md shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

//  Component with Animation
const ContactOption = ({ Icon, title, details, linkText, href }) => (
  <motion.article
    className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)" }}  // Hover Effect
    variants={fadeInUp}
  >
    <Icon className="text-3xl text-pink-500" />
    <div>
      <h4 className="text-lg font-semibold text-pink-800">{title}</h4>
      <h5 className="text-gray-600">{details}</h5>
      <a href={href} className="text-pink-500 hover:underline">
        {linkText}
      </a>
    </div>
  </motion.article>
);

export default Contact;
