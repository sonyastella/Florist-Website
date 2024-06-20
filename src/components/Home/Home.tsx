import React from 'react';

const Home: React.FC = () => {
  return (
    <><><div className="bg-[#d8e1e9] text-center">
      <div className="flex justify-center">
        <img src="/images/banerpic.webp" alt="Floral Arrangement" className="rounded-lg shadow-lg max-w-full" />
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-left mb-16 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl font-bold text-[#5f5e7a] mb-4">Meriza Florist</h2>
            <p className="text-lg font-alice text-gray-700">
              At Meriza Florist, we believe in the transformative power of flowers. For over a decade, we’ve been curating breathtaking floral designs that evoke emotions and create lasting memories. From elegant bouquets to vibrant centerpieces, each creation is meticulously crafted to celebrate life’s special moments.
              <br />
              Our passion for flowers goes beyond aesthetics. It’s about connecting people, spreading love, and brightening spaces. With a commitment to quality and creativity, we source the finest blooms from around the world, ensuring every arrangement is a masterpiece.
              <br />
              Join us in our journey to bring nature’s beauty to your doorstep. Whether you’re planning a wedding, sending heartfelt condolences, or simply brightening someone’s day, Meriza Florist is here to make it memorable.
              <br />
              Let Meriza Florist be your partner in celebrating life’s beautiful moments, one bloom at a time.
            </p>
          </div>
          <div className="max-w-sm flex-shrink-0">
            <img src="/images/mainpic.webp" alt="Floral pic" className="w-[300px] h-[500px] rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>
    </div>
      <h1 className="text-4xl font-bold text-[#5f5e7a] font-alice mb-10 my-40">Catalogue</h1><div className="home-content flex flex-wrap justify-center gap-8">
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower4.webp" alt="Flower 1"  width="200" height="300" className="w-[1500px] h-[250px] object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Azure Elegance Bouquet</h2>
        </div>
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower2.webp" alt="Flower 2"  width="200" height="300" className="w-[1500px] h-[250px] object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Romantic Blushing Petals</h2>
        </div>
        <div className="flower-block w-full md:w-1/3 text-center p-4">
          <img src="/images/flower3.webp" alt="Flower 3"  width="200" height="300" className="w-[1500px] h-[250px] object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold text-[#5f5e7a]">Royal Velvet Bouquet</h2>
        </div>
      </div></>
      <a href="/catalogue" className="home-link inline-block mt-8 text-lg text-[#5f5e7a] underline">See more</a></>
    
  );
};

export default Home;
