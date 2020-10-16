import React from 'react';
import { useSelector } from 'react-redux';
import RevenueBalanceSheet from '../revenue-balance-sheet';
import OfferCard from '../offer-card';
import './revenue-page.scss';
import OfferBalanceSheet from '../offer-balance-sheet';
import RevenueAreaChart from '../revenue-area-chart';
import { selectIsFetchingRevenue } from '../../store/revenue.store';
import Loading from '../../../components/loading';
import RevenueDatePicker from '../revenue-date-picker';

const RevenuePage = () => {
  const isFecthing = useSelector(selectIsFetchingRevenue);

  return (
    <div className='revenue-page'>
      <div className='status-bar' />
      <div className='content'>
        <OfferCard />
        <RevenueDatePicker />
        <RevenueBalanceSheet />
        <OfferBalanceSheet />
        <RevenueAreaChart />
      </div>
      {isFecthing && <Loading />}
    </div>
  );
};

export default RevenuePage;
