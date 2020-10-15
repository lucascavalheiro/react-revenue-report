import React from 'react';
import { useSelector } from 'react-redux';
import { selectOfferDescription } from '../../store/revenue.store';
import './offer-card.scss';

const OfferDescription = () => {
  const description = useSelector(selectOfferDescription);

  return <span className='offer-description'>{description || ''}</span>;
};

export default OfferDescription;
