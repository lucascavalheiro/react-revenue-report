import React from 'react';
import './dropdown-date-picker.scss';

class DropdownDatePicker extends React.Component {
  render() {
    const { value, onClick, error } = this.props;
    const classes = ['ddl-date-picker'];
    if (error) classes.push('error');

    return (
      <>
        <div className={classes.join(' ')} onClick={onClick}>
          <span>{value || 'Select a date...'}</span>
          <div>
            <span>&#9660;</span>
          </div>
        </div>
        {error && <div className='error-text'>{error}</div>}
      </>
    );
  }
}

export default DropdownDatePicker;
