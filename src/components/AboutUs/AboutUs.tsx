import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container max-w-7xl mx-auto py-20 bg-[#efe6dd] text-center">
      <h1 className="about-us-heading text-4xl font-bold mb-12 text-[#5f5e7a] font-alice">About Us</h1>
      <div className="about-us-content flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
        <div className="about-us-text max-w-md text-left text-[#5f5e7a] text-lg">
          <p>
            Established in 2022, Meriza Florist has swiftly emerged as a premier provider of floral arrangements, catering to a diverse clientele with a passion for exquisite blooms. With a commitment to creativity, quality, and customer satisfaction, Meriza Florist has carved a niche in the competitive floral industry.
          </p>
        </div>
        <div className="about-us-image max-w-sm flex-shrink-0">
          <img src="/images/frontpic.webp" alt="About Us" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
