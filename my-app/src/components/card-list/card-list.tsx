import Card from '../card/Card';
import { cardData } from '../../core/config/data';
import { CardComponentProps, SearchString } from '../../core/types/types';
import React from 'react';

class CardList extends React.Component<SearchString> {
  render() {
    const { value } = this.props;
    const result = cardData.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()));
    return (
      <ul className="card-list" data-testid="card-list-test">
        {result.map((item: CardComponentProps) => (
          <li key={item.id} className="card-list__item">
            <Card {...item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
