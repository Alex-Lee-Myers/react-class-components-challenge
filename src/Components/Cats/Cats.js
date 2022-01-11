import React from 'react';
// import CatIndex from './CatIndex'
import { Container } from 'reactstrap';
import CatIndex from './CatIndex';

const Cats = () => {
  return (
    <Container className="App">
      <br />
      <h1>Here Kitty Kitty Kitty</h1>
      <CatIndex />
    </Container>
  );

}

export default Cats;
