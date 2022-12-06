import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Card from './Card';

const cardItem = {
  name: 'test',
  birthday: 'birthday',
  location: 'location',
  image: 'image',
  voice: 'voice',
  id: 1,
};

test('Card', () => {
  render(<Card {...cardItem} />);
  expect(screen.getByTestId('test')).toBeInTheDocument();
});
