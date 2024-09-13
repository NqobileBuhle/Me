import React from 'react';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-content py-8 bg-purple-950 text-pink-600 text-center">
      <hr className="mb-4 border-pink-600" />
      
      <p className="footer-text mb-2">
        Would love to meet other software developers to get jobs done.
      </p>
      
      <p className="footer_logo">
        Nqobile Biyela &copy; {currentYear} All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;

