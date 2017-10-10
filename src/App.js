import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Colin's Zipcode Distance Finder App!</h1>
        </header>
        <p className="App-intro">
          To get started, enter two zip codes in the fields below and click the 'Submit' button to determine the distance (in miles) between the two.
        </p>
        <FormContainer />
      </div>
    );
  }
}

export default App;
