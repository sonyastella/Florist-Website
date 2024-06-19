import { useState, useEffect } from 'react';

interface ApiResponse {

}

const useFetch = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
  
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
