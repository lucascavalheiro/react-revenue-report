import React from 'react';
import { useSelector } from 'react-redux';
import { formatToUSD } from '../../../../utils/money';
import Divider from '../../../components/divider';
import LabelValueLine from '../../../components/label-value-line';
import { selectRevenueValues } from '../../store/revenue.store';
import NetRevenue from '../net-revenue';
import './revenue-balance-sheet.scss';

const RevenueBalanceSheet = () => {
  const revenueValues = useSelector(selectRevenueValues);

  return (
    <div className='revenue-balance-sheet'>
      <Divider thick />
      <NetRevenue value={revenueValues?.net} />

      <Divider />
      <LabelValueLine
        label='Gross revenue'
        value={formatToUSD(revenueValues?.gross)}
      />

      <Divider />
      <LabelValueLine
        label='Credits spent'
        value={formatToUSD(revenueValues?.spent)}
      />
      <Divider />
    </div>
  );
};

export default RevenueBalanceSheet;
