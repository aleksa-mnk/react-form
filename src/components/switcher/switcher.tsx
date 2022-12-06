import React from 'react';
import { Component } from 'react';
import { SwitcherComponent } from '../../core/types/types';

class Switcher extends Component<SwitcherComponent> {
  render() {
    const { acceptedInputRef, errors, checked, onChangeHandler } = this.props;
    return (
      <>
        <div className="switcher">
          <span className="switcher__status">I accepted</span>
          <div className="switcher__wrapper transparent">
            <input
              className="switcher__input visually-hidden"
              id="switcher"
              type="checkbox"
              ref={acceptedInputRef}
              onChange={(event) => {
                onChangeHandler(
                  event,
                  (acceptedInputRef.current as HTMLInputElement).checked,
                  'accepted'
                );
              }}
              checked={checked}
            />
            <label className="switcher__label" htmlFor="switcher">
              <span className="visually-hidden">Accepted switcher</span>
            </label>
          </div>
        </div>
        {errors.accepted && (
          <span className="form__error-text form__error-text--switcher">{errors.accepted}</span>
        )}
      </>
    );
  }
}

export default Switcher;
