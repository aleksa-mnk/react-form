import React from 'react';
import { Component } from 'react';
import { NameFieldsComponent } from '../../core/types/types';

class NameFields extends Component<NameFieldsComponent> {
  render() {
    const { errors } = this.props;
    const { onChangeHandler, nameInputRef } = this.props;
    return (
      <>
        <label className="form__label" htmlFor="name">
          NAME:
        </label>
        <input
          className="form__input form__input--text"
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          onChange={(event) => {
            onChangeHandler(event, nameInputRef.current?.value, 'name');
          }}
          ref={nameInputRef}
        />
        {errors.name && <span className="form__error-text">{errors.name}</span>}
      </>
    );
  }
}

export default NameFields;
