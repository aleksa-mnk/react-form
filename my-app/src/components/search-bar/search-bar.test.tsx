import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../core/utils/test-utils';
import SearchBar from './search-bar';
import userEvent from '@testing-library/user-event';

interface Store {
  [key: string]: string;
}

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key(n: number): string | null {
    if (typeof n === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
      );
    }

    if (n >= Object.keys(this.store).length) {
      return null;
    }

    return Object.keys(this.store)[n];
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): undefined {
    if (typeof key === 'undefined' && typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 0 present."
      );
    }

    if (typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present."
      );
    }

    if (!key) return undefined;

    this.store[key] = value.toString() || '';
    this.length = Object.keys(this.store).length;

    return undefined;
  }

  removeItem(key: string): undefined {
    if (typeof key === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'removeItem' on 'Storage': 1 argument required, but only 0 present."
      );
    }

    delete this.store[key];
    this.length = Object.keys(this.store).length;
    return undefined;
  }

  clear(): undefined {
    this.store = {};
    this.length = 0;

    return undefined;
  }
}

describe('SearchBar', () => {
  it('renders search input', () => {
    renderWithRouter(<SearchBar />);
    expect(screen.getByPlaceholderText(/Search/i));
  });

  it('Renders input empty if local storage empty', async () => {
    renderWithRouter(<SearchBar />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('Renders input value if Local storage contain it', async () => {
    localStorage = new LocalStorageMock();
    const { rerender } = renderWithRouter(<SearchBar />);
    userEvent.type(screen.getByDisplayValue(''), 'test');
    rerender(<SearchBar />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
});
