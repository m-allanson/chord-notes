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

// rotate an array
const rotate = (arr, count) => {
  count -= arr.length * Math.floor(count / arr.length)
  arr.push.apply(arr, arr.splice(0, count))
  return arr
}

class ChordsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setChordNotes = this.setChordNotes.bind(this)
    this.chordIntervals = new Map([
      ['major', [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0]],
      ['minor', [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]],
      ['seventh', [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
    ])
  }

  componentWillMount() {
    this.setChordNotes(A)
  }

  chordNotes(
    intervals,
    octave,
  ) {
    // Map 1s and 0s to notes or nulls
    const chordNotes = intervals
      .map((interval, index) => (
        interval ? octave[index] : null)
      )

      return chordNotes
  }

  setChordNotes(root) {
    const {chordNotes, chordIntervals} = this

    const octaveKeys = [...noteNames.keys()]
    const rootOffset = octaveKeys.indexOf(root)
    const rootOctave = rotate(octaveKeys, rootOffset)

    const chords = [...chordIntervals]
      .map(([name, intervals]) => (
        [ name, chordNotes(intervals, rootOctave) ]
      ))

    this.setState({
      chords: new Map(chords),
      octave: rootOctave,
      root,
    })
    // , () => {console.log('state', this.state)}
  }

  render() {
    return (
      <div>
        <Chords
          chords={this.state.chords}
          noteNames={noteNames}
          octave={this.state.octave}
          onNoteClick={this.setChordNotes}
          root={this.state.root}
        />
      </div>
    )
  }
}

Chords.propTypes = {}

export default ChordsContainer
