// @flow
import React, { Component } from 'react';
import './App.css';
import ChordsContainer from './ChordsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chord notes</h2>
          <p>Choose a root note to see how its chords are built</p>
        </div>
        <ChordsContainer />
      </div>
    );
  }
}

export default App;
