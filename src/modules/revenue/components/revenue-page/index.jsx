import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownDatePicker from '../../../components/dropdown-date-picker';
import useFetchRevenue from '../../data/use-fetch-revenue';
import RevenueBalanceSheet from '../revenue-balance-sheet';
import OfferCard from '../offer-card';
import './revenue-page.scss';
import OfferBalanceSheet from '../offer-balance-sheet';

const RevenuePage = () => {
  const [date, setDate] = useState(null);
  const [fetchByDate] = useFetchRevenue();

  return (
    <div className='revenue-page'>
      <div className='status-bar' />
      <div className='content'>
        <OfferCard />

        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          customInput={<DropdownDatePicker />}
          wrapperClassName='date-picker-full-width'
          dateFormat='MMMM dd, yyyy'
        />

        <RevenueBalanceSheet />

        <OfferBalanceSheet />
      </div>
    </div>
  );
};

export default RevenuePage;
