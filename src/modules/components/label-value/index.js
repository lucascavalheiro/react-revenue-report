import React from 'react';
import './label-value.scss';

const LabelValue = ({ text }) => {
  return <span className='label-value'>{text || ''}</span>;
};

export default LabelValue;
