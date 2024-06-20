import React from 'react';

const teamMembers = [
  {
    name: 'Carrie Gonzales',
    image: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    name: 'Roberta Burton',
    image: 'https://randomuser.me/api/portraits/lego/2.jpg',
  },
  {
    name: 'Gordon Austin',
    image: 'https://randomuser.me/api/portraits/lego/3.jpg',
  },
  {
    name: 'Carrie Willis',
    image: 'https://randomuser.me/api/portraits/lego/4.jpg',
  },
  {
    name: 'Peter Fleming',
    image: 'https://randomuser.me/api/portraits/lego/5.jpg',
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container max-w-7xl mx-auto py-20 bg-[#efe6dd] text-center">
      <div className="about-us-content flex flex-col md:flex-row justify-center items-center gap-12 bg-[#d8e1e9] p-8 rounded-lg">
        <div className="about-us-text max-w-md text-left text-[#5f5e7a] text-lg">
          <h1 className="text-4xl font-bold mb-4 text-[#5f5e7a] font-alice">About Us</h1>
          <p>
            Established in 2022, Meriza Florist has swiftly emerged as a premier provider of floral arrangements, catering to a diverse clientele with a passion for exquisite blooms. With a commitment to creativity, quality, and customer satisfaction, Meriza Florist has carved a niche in the competitive floral industry.
          </p>
        </div>
        <div className="about-us-image max-w-sm flex-shrink-0">
          <img src="/images/frontpic.webp" alt="About Us" className="w-[200px] h-[300px] rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      <div className="about-us-content flex flex-col md:flex-row justify-center items-center gap-12 mt-20 bg-[#d8e1e9] p-8 rounded-lg">
        <div className="about-us-image max-w-sm flex-shrink-0">
          <img src="/images/teampic.webp" alt="Our Team" className="w-[200px] h-[300px] rounded-lg shadow-lg object-cover" />
        </div>
        <div className="about-us-text max-w-md text-left text-[#5f5e7a] text-lg">
          <h2 className="text-3xl font-bold mb-4 font-alice">Nurturing beauty and creativity</h2>
          <p>
            At Meriza Florist, we cultivate a culture of creativity, passion, and excellence. Our team is united by a shared love for flowers and a dedication to craftsmanship that goes beyond expectations.
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-[#5f5e7a] font-alice mt-20 mb-12">Our Amazing Team</h1>
      <div className="team-container flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-4 bg-white shadow-lg rounded-lg">
            <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#333]">{member.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
