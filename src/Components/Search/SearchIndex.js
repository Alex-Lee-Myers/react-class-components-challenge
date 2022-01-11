import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
//! In this challenge your goal is to use the existing code to create the following:
//? 1.) ability to accept a search term from a user
//? 2.) ability to filter the array in the state by that term
//? 3.) ability to display only the terms that match the search, or all if no search term is provided

export default class SearchIndex extends Component {
  //Array for: things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      filteredThings: [],
    };
  }

  //? 1.) ability to accept a search term from a user
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  //? 2.) ability to filter the array in the state by that term
  filterThings = () => {
    const filteredThings = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
    this.setState({filteredThings});
  }

  //? 3.) ability to display only the terms that match the search, or all if no search term is provided
  // If the search term is empty, then the filteredThings array will be the same as the things array.
  // If the search term is not empty, then the filteredThings array will be the same as the things array, but filtered by the search term.
  render() {
    return (
      <div>
        <h1>AskJeeves.2022.map</h1>
        <Input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <button onClick={this.filterThings}>Search</button>
        <ul>
          {this.state.filteredThings.map((thing, index) => {
            return <li key={index}>{thing}</li>
          })}
        </ul>
      </div>
    );
  }
}