import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#efe6dd] text-[#5f5e7a] py-2 w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-2">
          <img src="/images/meriza.webp" alt="Logo" width="200" height="300" className="w-full max-w-sm md:max-w-xs h-auto" />
        </div>
        <nav>
          <ul className="list-none flex justify-center p-0 m-0 flex-wrap">
            <li className="mx-4 my-2">
              <a href="/" className="text-[#5f5e7a] no-underline py-2 px-4 font-bold text-xl md:text-2xl">Home</a>
            </li>
            <li className="mx-4 my-2">
              <a href="/catalogue" className="text-[#5f5e7a] no-underline py-2 px-4 font-bold text-xl md:text-2xl">Catalogue</a>
            </li>
            <li className="mx-4 my-2">
              <a href="/team" className="text-[#5f5e7a] no-underline py-2 px-4 font-bold text-xl md:text-2xl">Our Team</a>
            </li>
            <li className="mx-4 my-2">
              <a href="/about" className="text-[#5f5e7a] no-underline py-2 px-4 font-bold text-xl md:text-2xl">About Us</a>
            </li>
            <li className="mx-4 my-2">
              <a href="/contact" className="text-[#5f5e7a] no-underline py-2 px-4 font-bold text-xl md:text-2xl">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
