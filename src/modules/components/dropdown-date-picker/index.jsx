import React from 'react';
import './dropdown-date-picker.scss';

class DropdownDatePicker extends React.Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <div className='ddl-date-picker' onClick={onClick}>
        <span>{value || 'Select a date...'}</span>
        <div>
          <span>&#9660;</span>
        </div>
      </div>
    );
  }
}

export default DropdownDatePicker;
