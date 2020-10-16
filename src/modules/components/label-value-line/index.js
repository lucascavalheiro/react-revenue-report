import React from 'react';
import LabelTitle from '../label-title';
import LabelValue from '../label-value';
import './label-value-line.scss';

const LabelValueLine = ({ label, value }) => {
  return (
    <div className='label-value-line'>
      <LabelTitle text={label} />
      <LabelValue text={value} />
    </div>
  );
};

export default LabelValueLine;
