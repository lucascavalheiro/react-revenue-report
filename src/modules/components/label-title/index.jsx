import React from 'react';
import './label-title.scss';

const LabelTitle = ({ text }) => {
  return <span className='label-title'>{text || ''}</span>;
};

export default LabelTitle;
