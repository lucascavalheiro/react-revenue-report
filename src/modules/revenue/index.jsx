import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetchRevenue from './data/use-fetch-revenue';
import { selectRevenueState } from './store/revenue.store';

const Revenue = (props) => {
  const [setDate] = useFetchRevenue();
  const revenueState = useSelector(selectRevenueState);

  useEffect(() => {
    setDate('any');
  }, []);
  return (
    <div>
      Revenue Page
      <div>{JSON.stringify(revenueState)}</div>
    </div>
  );
};

export default Revenue;
