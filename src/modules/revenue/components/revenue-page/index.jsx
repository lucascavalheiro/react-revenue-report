import React, { useEffect } from 'react';
import useFetchRevenue from '../../data/use-fetch-revenue';
import OfferCard from '../offer-card';
import './revenue-page.scss';

const RevenuePage = () => {
  const [setDate] = useFetchRevenue();

  useEffect(() => {
    setDate('any');
  }, []);
  return (
    <div className='revenue-page'>
      <div className='status-bar' />
      <div className='content'>
        <OfferCard />
      </div>
    </div>
  );
};

export default RevenuePage;
