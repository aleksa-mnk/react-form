/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NewCardComponentProps } from '../../core/types/types';
import FormCard from '../form-card/form-card';

interface Props {
  cardsData: NewCardComponentProps[];
}

class FormCardList extends React.Component<Props, any> {
  render() {
    const { cardsData } = this.props;

    return (
      <ul className="card-list">
        {cardsData.map((cardData) => (
          <li key={cardData.id} className="card-list__item">
            <FormCard cardData={cardData} />
          </li>
        ))}
      </ul>
    );
  }
}

export default FormCardList;
