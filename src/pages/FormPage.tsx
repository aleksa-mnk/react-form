import React from 'react';
import { Component } from 'react';
import FormCardList from '../components/form-card-list/form-card-list';
import Form from '../components/form/form';
import { NewCardComponentProps, State } from '../core/types/types';

class FormPage extends Component<Readonly<unknown>, State> {
  state = {
    cardsData: [],
  };

  addCard = (cardData: NewCardComponentProps): void => {
    this.setState({ cardsData: [...this.state.cardsData, cardData] });
  };

  render() {
    const { cardsData } = this.state;
    const hasCard = Boolean(cardsData.length);

    return (
      <>
        <div className="container form">
          <div className="form__img">
            Form for adding
            <br />
            new characters
          </div>
          <div className="form__data">
            <Form addCard={this.addCard} />

            {hasCard && <FormCardList cardsData={cardsData} />}
          </div>
        </div>
      </>
    );
  }
}

export default FormPage;
