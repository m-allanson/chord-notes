// @flow
import React, { Component } from 'react'

import BarreChanges from '../BarreChanges'

import randomInt from '../../utils/randomInt'
import { noteNames, getRandomNoteName } from '../../utils/octave'

class BarreChangesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chords: [this.getChord(), this.getChord()]
    }
  }
  getChord = () => {
    return {
      root: getRandomNoteName(noteNames),
      shape: this.getShape()
    }
  }
  getShape = () => {
    const shapes = ['E', 'A']
    return shapes[randomInt(shapes.length)]
  }
  onClick = () => {
    this.setState({
      chords: [this.getChord(), this.getChord()]
    })
  }
  render() {
    const chords = this.state.chords
    return (
      <BarreChanges
        onClick={this.onClick}
        firstChord={chords[0]}
        secondChord={chords[1]}
      />
    )
  }
}

export default BarreChangesContainer
