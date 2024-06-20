import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4b4b7c] text-white py-4 text-center">
      <div className="max-w-screen-md mx-auto">
        <p className="text-sm">&copy; 2024 Meriza Florist. All rights reserved.</p>
        <nav className="mt-2">
          <a href="/" className="text-white hover:underline mx-2">Home</a>
          <a href="/catalogue" className="text-white hover:underline mx-2">Catalogue</a>
          <a href="/team" className="text-white hover:underline mx-2">Our Team</a>
          <a href="/about" className="text-white hover:underline mx-2">About Us</a>
          <a href="/contact" className="text-white hover:underline mx-2">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
