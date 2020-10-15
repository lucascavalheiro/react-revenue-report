import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../components/card';
import { selectOfferDescription } from '../../store/revenue.store';
import './offer-card.scss';
import OfferDescription from './offer-description';
import OfferName from './offer-name';

const OfferCard = () => {
  const description = useSelector(selectOfferDescription);

  return (
    <Card>
      <div className='offer-card-content'>
        <OfferName />
        <OfferDescription />
      </div>
    </Card>
  );
};

export default OfferCard;
