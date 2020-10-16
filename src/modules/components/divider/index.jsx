import React from 'react';
import './divider.scss';

const Divider = ({ thick = false }) => {
  const classes = ['divider'];
  if (thick) classes.push('thick');

  return <div className={classes.join(' ')} />;
};

export default Divider;
