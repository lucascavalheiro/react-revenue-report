import React from 'react';
import { useSelector } from 'react-redux';
import { selectOfferName } from '../../store/revenue.store';
import './offer-card.scss';

const OfferName = () => {
  const name = useSelector(selectOfferName);

  return <span className='offer-name'>{name || ''}</span>;
};

export default OfferName;
