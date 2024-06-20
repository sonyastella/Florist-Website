import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container bg-[#efe6dd] text-center py-20">
      <h1 className="home-heading text-5xl font-bold text-[#5f5e7a] mb-4">Welcome to Meriza Florist</h1>
      <p className="home-subheading text-2xl font-dancing text-[#5f5e7a] mb-12">
        Discover the beauty of nature with our exquisite floral arrangement
      </p>
      <div className="home-content flex flex-wrap justify-center gap-8">
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower4.png" alt="Flower 1" width="200" height="300" className="w-full h-auto object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Azure Elegance Bouquet</h2>
        </div>
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower2.png" alt="Flower 2" width="200" height="300" className="w-full h-auto object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Romantic Blushing Petals</h2>
        </div>
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower3.png" alt="Flower 3" width="200" height="300" className="w-full h-auto object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Royal Velvet Bouquet</h2>
        </div>
      </div>
      <a href="/catalogue" className="home-link inline-block mt-8 text-lg text-[#5f5e7a] underline">See more</a>
    </div>
  );
};

export default Home;
