import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownDatePicker from '../../../components/dropdown-date-picker';
import useFetchRevenue from '../../data/use-fetch-revenue';
import { selectRevenueError } from '../../store/revenue.store';

const RevenueDatePicker = () => {
  const [date, setDate] = useState(null);
  const [fetchByDate] = useFetchRevenue();
  const error = useSelector(selectRevenueError);

  useEffect(() => {
    fetchByDate(date);
  }, [date]);

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      customInput={<DropdownDatePicker error={error} />}
      wrapperClassName='date-picker-full-width'
      dateFormat='MMMM dd, yyyy'
    />
  );
};

export default RevenueDatePicker;
