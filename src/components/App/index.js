// @flow
import React, { Component } from 'react'

import Router from '../Router'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chord notes</h2>
          <p>Choose a root note to see how its chords are built</p>
        </div>
        <Router />
      </div>
    )
  }
}

export default App
