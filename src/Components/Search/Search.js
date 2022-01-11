import React from 'react';
// import SearchIndex from './SearchIndex';
import { Container } from 'reactstrap';
import SearchIndex from './SearchIndex';

//! In this challenge your goal is to use the existing code to create the following:
//? 1.) ability to accept a search term from a user
//? 2.) ability to filter the array in the state by that term
//? 3.) ability to display only the terms that match the search, or all if no search term is provided


const Search = () => {
  return (
    <Container className="App">
      <br />
      { <SearchIndex />}
    </Container>
  );

}

export default Search;
