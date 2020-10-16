import React from 'react';
import { useSelector } from 'react-redux';
import { formatToUSD } from '../../../../utils/money';
import Divider from '../../../components/divider';
import LabelValueLine from '../../../components/label-value-line';
import { selectOffer } from '../../store/revenue.store';
import './offer-balance-sheet.scss';

const OfferBalanceSheet = () => {
  const offer = useSelector(selectOffer);
  const limitText = offer?.limit ? `${offer?.limit} per customer` : '';

  return (
    <div className='offer-balance-sheet'>
      <Divider thick />
      <LabelValueLine
        label='Validation'
        value={formatToUSD(offer?.validation)}
      />

      <Divider />
      <LabelValueLine label='Item' value={offer?.item} />

      <Divider />
      <LabelValueLine label='Unit cost' value={formatToUSD(offer?.unitCost)} />

      <Divider />
      <LabelValueLine label='Limit' value={limitText} />

      <Divider />
      <LabelValueLine label='Category' value={offer?.category} />
      <Divider />
    </div>
  );
};

export default OfferBalanceSheet;
