import React from 'react';
import { formatToUSD } from '../../../../utils/money';
import LabelTitle from '../../../components/label-title';
import './net-revenue.scss';

const NetRevenue = ({ value }) => {
  return (
    <div className='net-revenue'>
      <LabelTitle text='Net revenue' />
      <span className='net-revenue-value'>{formatToUSD(value)}</span>
    </div>
  );
};

export default NetRevenue;
