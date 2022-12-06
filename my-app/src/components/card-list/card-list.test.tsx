import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import CardList from './card-list';

test('Card', () => {
  render(<CardList value="" />);
  expect(screen.getByTestId('card-list-test')).toBeInTheDocument();
});
