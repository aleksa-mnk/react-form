import React from 'react';
import { Component } from 'react';
import { VoicerSelectComponent } from '../../core/types/types';
import { Voicers } from '../../core/config/country';

class VoicerSelect extends Component<VoicerSelectComponent> {
  render() {
    const { countryInputRef, errors, onChangeHandler } = this.props;

    return (
      <>
        <label className="form__label" htmlFor="country">
          VOICED BY:
        </label>
        <select
          className="form__select"
          ref={countryInputRef}
          onChange={(event) => {
            onChangeHandler(event, countryInputRef.current?.value, 'country');
          }}
          name="country"
          id="country"
        >
          <option className="form__option" value="">
            Select voicer
          </option>
          {Voicers.map(({ name, id }) => (
            <option key={id} className="form__option" value={name}>
              {name}
            </option>
          ))}
        </select>
        {errors.country && <span className="form__error-text">{errors.country}</span>}
      </>
    );
  }
}

export default VoicerSelect;
