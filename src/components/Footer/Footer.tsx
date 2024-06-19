import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5f5e7a] py-10 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Meriza Florist. All rights reserved.</p>
        <nav className="flex justify-center space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/catalogue" className="hover:underline">Catalogue</a>
          <a href="/team" className="hover:underline">Our Team</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
