import React from 'react';
import { Component } from 'react';
import { FormCardComponentProps } from '../../core/types/types';

class FormCard extends Component<FormCardComponentProps> {
  render() {
    const {
      cardData: { imgSrc, date, name, country, roles },
    } = this.props;

    return (
      <div className="character-card" data-testid={name}>
        <img className="character-card__img" src={imgSrc} alt={name} />
        <div className="character-description">
          <h3 className="character-card__name">{name}</h3>
          <p>Birthday: {date}</p>
          <p>Voiced by: {country}</p>
          <p>Roles: {roles}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
