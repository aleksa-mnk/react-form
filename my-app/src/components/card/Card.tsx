import React from 'react';
import { CardComponentProps } from '../../core/types/types';

class Card extends React.Component<CardComponentProps> {
  render() {
    const { name, birthday, location, image, voice, id } = this.props;

    return (
      <div className="character-card" data-testid={name} data-id={id}>
        <img className="character-card__img" src={image} alt={name} />
        <div className="character-description">
          <h3 className="character-card__name">{name}</h3>
          <p>Birthday: {birthday}</p>
          <p>Location: {location}</p>
          <p>Voiced by: {voice}</p>
        </div>
      </div>
    );
  }
}

export default Card;
