//! For this challenge, write the logic to accomplish the following:
//? 1.) Fetch a random image from this api: <a href="https://dog.ceo/dog-api/">here</a>
//? 2.) Save this image URL to the state of the DogIndex component
//? 3.) Render the image to the screen
//? 4.) Have a button that fetches a new image
//? 5.) Make sure to include some good practice error handling

import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        dog: {},
        dogImage: '',
        };
    }
    
    componentDidMount() {
        this.getDogImage();
    }
    
    getDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
            dog: data,
            dogImage: data.message,
            });
        })
        .catch(error => console.log(error));
    }
    
    render() {
        return (
        <div>
            <h1>Here is your dog:</h1>
            <img src={this.state.dogImage} alt="dog" />
            <button onClick={() => this.getDogImage()}>Get a new dog</button>
        </div>
        );
    }
}