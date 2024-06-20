import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Catalogue.css';

const Catalogue: React.FC = () => {
  const { items, status, error } = useSelector((state: RootState) => state.catalogue);

  return (
    <div className="py-20 bg-[#efe6dd] text-center font-alice">
      <h1 className="text-4xl font-bold text-[#5f5e7a] mb-20">Catalogue Page</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="text-center p-4 bg-white shadow-lg rounded-lg">
              <img src={item.image} alt={item.name} width="200" height="300" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-[#333]">{item.name}</h2>
              <p className="text-lg text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
