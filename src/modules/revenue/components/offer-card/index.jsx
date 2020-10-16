import React from 'react';
import Card from '../../../components/card';
import './offer-card.scss';
import OfferDescription from './offer-description';
import OfferName from './offer-name';

const OfferCard = () => {
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
