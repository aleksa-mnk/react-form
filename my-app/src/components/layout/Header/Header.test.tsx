import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('Header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByTestId('Home-link')).toBeInTheDocument();
});
