import React, { Component } from 'react';
import CatIndex from './CatIndex';

// Render the list of cat breeds to the screen
// Use props correctly
// Use .map() correctly
// Ensure there are no errors
export default class CatList extends Component {

  render () {
    return (
      <div>
        <ul>
          {this.props.breeds.map((breed, index) => {
            return <li key={index}>{breed}</li>
          }
          )
        }
        </ul>
      </div>
    );
  }
}