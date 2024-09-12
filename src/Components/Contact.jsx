import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Contact = () => {
  return (
    <section id="Contact" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">CONTACT ME</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              details="nqobilebiyela3@gmail.com"
              linkText="Send Message"
              href="https://www.facebook.com/nqobilebiyela3"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <form className="space-y-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Your Full Name"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Message"
              ></textarea>
              <button
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Option Component
const ContactOption = ({ Icon, title, details, linkText, href }) => (
  <article className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-3xl text-blue-500" />
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <h5 className="text-gray-600">{details}</h5>
      <a href={href} className="text-blue-500 hover:underline">
        {linkText}
      </a>
    </div>
  </article>
);

export default Contact;



