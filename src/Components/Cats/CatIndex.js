import React, { Component } from 'react';
import CatList from './CatList';

// Render the list of cat breeds to the screen
// Use props correctly
// Use .map() correctly
// Ensure there are no errors
export default class CatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair'],
    };
  }

  // CatList.js maps out the breeds array and returns them in the component. 
  // return the CatList component to the screen
  render() {
    return (
      <div>
        <CatList breeds={this.state.breeds} />
      </div>
    );
  }
}