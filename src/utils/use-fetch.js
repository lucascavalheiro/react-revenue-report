import { useEffect, useState } from 'react';

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (url, options = {}) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);
    try {
      if (!url) return;

      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        return;
      }

      setResponse(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, response, isLoading, error];
};

export default useFetch;
