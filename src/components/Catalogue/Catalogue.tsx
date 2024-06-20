import React from 'react';

// Define your catalogue data
const catalogueData = [
  { "id": 1, "name": "Royal Velvet Bouquet", "image": "/images/flower2.png", "price": "Rp. 2,800,000" },
  { "id": 2, "name": "Romantic Blushing Petals", "image": "/images/flower3.png", "price": "Rp. 1,000,000" },
  { "id": 3, "name": "Beautiful Rainbow Baby Breathe", "image": "/images/flower4.png", "price": "Rp. 1,500,000" },
  { "id": 4, "name": "Pink Blush Baby Breathe Bouquet", "image": "/images/flower5.png", "price": "Rp. 1,200,000" },
  { "id": 5, "name": "Azure Elegance Bouquet", "image": "/images/flower6.png", "price": "Rp. 1,700,000" },
  { "id": 6, "name": "Ocean Blue Baby Breathe Bouquet", "image": "/images/flower7.png", "price": "Rp. 1,450,000" }
];

const Catalogue: React.FC = () => {
  return (
    <div className="py-20 bg-[#efe6dd] text-center font-alice">
      <h1 className="text-4xl font-bold text-[#5f5e7a] mb-20">Catalogue Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto px-4">
        {catalogueData.map((item) => (
          <div key={item.id} className="text-center p-4 bg-white shadow-lg rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-auto object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-[#333]">{item.name}</h2>
            <p className="text-lg text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
