import React from 'react';
import { TextField } from '@mui/material';
import CardList from '../card-list/card-list';

interface SearchBarState {
  searchString: string;
}

export default class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  state: SearchBarState = {
    searchString: '',
  };

  componentDidMount() {
    const search = localStorage.getItem('searchValue');
    if (search) {
      this.setState({
        searchString: search,
      });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchString);
  }

  handleChange(value: string) {
    this.setState({ searchString: value });
  }

  render() {
    const { searchString } = this.state;
    return (
      <>
        <TextField
          variant="outlined"
          value={searchString}
          className="home__search"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleChange(e.currentTarget.value)
          }
        ></TextField>
        <CardList value={searchString} />
      </>
    );
  }
}
