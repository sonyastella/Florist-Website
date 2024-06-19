import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 bg-[#efe6dd] text-center">
      <h1 className="text-5xl font-bold text-[#5f5e7a] mb-4">Welcome to Meriza Florist</h1>
      <p className="text-3xl font-dancing text-[#5f5e7a] mb-10">
        Discover the beauty of nature with our exquisite floral arrangement
      </p>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <div className="w-full md:w-1/3 text-center flex flex-col items-center p-8 bg-white shadow-md rounded-lg">
          <img src="/images/flower4.png" alt="azure elegon bouquet" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a] mt-4">Beautiful Rainbow Baby Breathe</h2>
        </div>
        <div className="w-full md:w-1/3 text-center flex flex-col items-center p-8 bg-white shadow-md rounded-lg">
          <img src="/images/flower2.png" alt="romantic blushing petals" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a] mt-4">Royal Velvet Bouquet</h2>
        </div>
        <div className="w-full md:w-1/3 text-center flex flex-col items-center p-8 bg-white shadow-md rounded-lg">
          <img src="/images/flower3.png" alt="royal velvet bouquet" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a] mt-4">Romantic Blushing Petals</h2>
        </div>
      </div>
      <a href="/catalogue" className="mt-8 inline-block text-xl text-[#5f5e7a] underline">see more</a>
    </div>
  );
};

export default Home;
