import React from 'react';
import { Component } from 'react';
import { DateFieldComponent } from '../../core/types/types';

class DateField extends Component<DateFieldComponent> {
  render() {
    const { dateInputRef, onChangeHandler, errors } = this.props;
    const date = this.props.dateInputRef.current?.value;

    return (
      <>
        <label className="form__label" htmlFor="date">
          BIRTHDAY:
        </label>
        <input
          className="form__input form__input--date"
          type="date"
          name="date"
          id="date"
          ref={dateInputRef}
          onChange={(event) => {
            onChangeHandler(event, date ? date : '', 'date');
          }}
        />
        {errors.date && <span className="form__error-text">{errors.date}</span>}
      </>
    );
  }
}

export default DateField;
