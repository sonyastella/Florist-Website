import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setCatalogue, setStatus, setError } from '../../features/catalogue/catalogueSlice';

const Catalogue: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.catalogue);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setStatus('loading'));
      try {
        // Use the deployed Vercel URL for the API
        const response = await fetch('https://your-vercel-url/api/catalogue');
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          dispatch(setCatalogue(data));
          dispatch(setStatus('succeeded'));
        } else {
          const text = await response.text();
          throw new Error(`Expected JSON, got ${contentType}: ${text}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError('An unknown error occurred'));
        }
        dispatch(setStatus('failed'));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="py-20 bg-[#efe6dd] text-center font-alice">
      <h1 className="text-4xl font-bold text-[#5f5e7a] mb-20">Catalogue Page</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="text-center p-4 bg-white shadow-lg rounded-lg">
              <img src={item.image} alt={item.name} width="200" height="300" className="w-full h-auto object-cover rounded-lg mb-4" />
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
