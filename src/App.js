// @flow
import React, { Component } from 'react';
import './App.css';
import ChordsContainer from './ChordsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Chords</h2>
        </div>
        <ChordsContainer />
      </div>
    );
  }
}

export default App;
