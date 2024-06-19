import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto my-8 p-10 bg-[#efe6dd] text-center font-alice">
      <h1 className="text-4xl font-bold mb-12 text-[#5f5e7a]">Where to find us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center p-4">
          <img src="/images/store.png" alt="Location Icon" className="w-24 h-24 mr-4" />
          <p className="text-left text-[#5f5e7a]">
            <strong>Meriza Florist</strong><br />
            Ruko Cardoba Blok G No.3<br />
            Pantai Indah Kapuk
          </p>
        </div>
        <div className="flex items-center p-4">
          <img src="/images/email.png" alt="Email Icon" className="w-24 h-24 mr-4" />
          <p className="text-left text-[#5f5e7a]">ask.merizaflorist@gmail.com</p>
        </div>
        <div className="flex items-center p-4">
          <img src="/images/insta.png" alt="Instagram Icon" className="w-24 h-24 mr-4" />
          <p className="text-left text-[#5f5e7a]">@merizaflorist</p>
        </div>
        <div className="flex items-center p-4">
          <img src="/images/phone.png" alt="Phone Icon" className="w-24 h-24 mr-4" />
          <p className="text-left text-[#5f5e7a]">0821-0000-0000</p>
        </div>
        <div className="flex items-center p-4">
          <img src="/images/clock.png" alt="Clock Icon" className="w-24 h-24 mr-4" />
          <p className="text-left text-[#5f5e7a]">
            Opening Hours<br />
            mon - sat: 8 am - 10 pm<br />
            sun: 10 am - 5 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
