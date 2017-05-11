// @flow
import React, { Component } from 'react'

import RandomNote from '../RandomNote'
import { noteNames, getRandomNoteName } from '../../utils/octave'

class RandomNoteContainer extends Component {
  constructor(props) {
    super(props)
    const note = getRandomNoteName(noteNames)
    this.state = { note }
  }
  onClick = () => {
    const note = getRandomNoteName(noteNames)
    this.setState({ note })
  }
  render() {
    return <RandomNote onClick={this.onClick} note={this.state.note} />
  }
}

export default RandomNoteContainer
