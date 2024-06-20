import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5f5e7a] py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-center text-white font-alice">
        <p className="w-full text-sm">&copy; 2024 Meriza Florist. All rights reserved.</p>
        <div className="flex justify-center gap-4 w-full">
          <a href="/" className="hover:underline">Home</a>
          <a href="/catalogue" className="hover:underline">Catalogue</a>
          <a href="/team" className="hover:underline">Our Team</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
