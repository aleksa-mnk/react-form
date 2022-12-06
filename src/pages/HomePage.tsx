import React from 'react';
import SearchBar from '../components/search-bar/search-bar';

interface SearchBarState {
  searchString: string;
}

class HomePage extends React.Component<unknown, SearchBarState> {
  render() {
    return (
      <div data-testid="homepage" className="container">
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;
