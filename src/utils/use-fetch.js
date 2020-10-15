import { useEffect, useState } from 'react';
import { factoryRevenue } from '../modules/revenue/fixtures/revenue.factory';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const res = await fetch(url, options);
      // const json = await res.json();
      // setError(null);
      // setResponse(json);
      console.log(url, options);

      const mockResponse = { revenue: factoryRevenue.build({}) };

      setTimeout(() => {
        setResponse(mockResponse);
      }, 2000);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, response, isLoading, error];
};

export default useFetch;
