import React, { Component } from 'react'
import Chords from '../Chords'

const A = Symbol('A')
const A_SHARP = Symbol('A_SHARP')
const B = Symbol('B')
const C = Symbol('C')
const C_SHARP = Symbol('C_SHARP')
const D = Symbol('D')
const D_SHARP = Symbol('D_SHARP')
const E = Symbol('E')
const F = Symbol('F')
const F_SHARP = Symbol('F_SHARP')
const G = Symbol('G')
const G_SHARP = Symbol('G_SHARP')

const noteNames = new Map([
  [A, 'A'],
  [A_SHARP, 'A#'],
  [B, 'B'],
  [C, 'C'],
  [C_SHARP, 'C#'],
  [D, 'D'],
  [D_SHARP, 'D#'],
  [E, 'E'],
  [F, 'F'],
  [F_SHARP, 'F#'],
  [G, 'G'],
  [G_SHARP, 'G#'],
])

class ChordsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setChordNotes = this.setChordNotes.bind(this)
    this.chordIntervals = new Map([
      ['major', [0, 4, 7]],
      ['minor', [0, 3, 7]],
      ['seventh', [0, 4, 7, 10]],
    ])
  }

  componentDidMount() {
    this.setChordNotes(A)
  }

  chordNotes(
    root,
    intervals,
    noteNames,
  ) {
    const notes = [...noteNames.keys()]
    const offset = notes.indexOf(root)
    const max = noteNames.size

    return intervals
      .map(index => {
        const offsetIndex = offset + index
        const normalIndex = (offsetIndex >= max)
          ? offsetIndex - max
          : offsetIndex
        return noteNames.get(notes[normalIndex])
      })
  }

  setChordNotes(root) {
    const {chordNotes, chordIntervals} = this
    const chords = [...chordIntervals]
      .map(([name, intervals]) => (
        [ name, chordNotes(root, intervals, noteNames) ]
      ))
    this.setState({
      chords: new Map(chords),
      root,
    })
    // , () => {console.log('state', this.state)}
  }

  render() {
    return (
      <div>
        <Chords
          noteNames={noteNames}
          onNoteClick={this.setChordNotes}
          chords={this.state.chords}
          root={this.state.root}
        />
      </div>
    )
  }
}

Chords.propTypes = {}

export default ChordsContainer
