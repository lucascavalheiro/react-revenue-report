import React from 'react';
import './divider.scss';

const Divider = ({ thick = false, className }) => {
  const classes = ['divider'];
  if (thick) classes.push('thick');

  if (className) classes.push(className);

  return <div className={classes.join(' ')} />;
};

export default Divider;
