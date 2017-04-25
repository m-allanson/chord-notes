
import React, { Component } from 'react'
import Chords from '../Chords'

export const A = Symbol('A')
export const A_SHARP = Symbol('A_SHARP')
export const B = Symbol('B')
export const C = Symbol('C')
export const C_SHARP = Symbol('C_SHARP')
export const D = Symbol('D')
export const D_SHARP = Symbol('D_SHARP')
export const E = Symbol('E')
export const F = Symbol('F')
export const F_SHARP = Symbol('F_SHARP')
export const G = Symbol('G')
export const G_SHARP = Symbol('G_SHARP')

// rotate an array
const rotate = (arr, count) => {
  count -= arr.length * Math.floor(count / arr.length)
  arr.push.apply(arr, arr.splice(0, count))
  return arr
}

class ChordsContainer extends Component {
  constructor(props) {
    super(props);
    this.chordIntervals = new Map([
      ['major',   [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0]],
      ['minor',   [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]],
      ['seventh', [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
      ['sus2',    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]],
      ['sus4',    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]],
    ])
    this.noteNames = new Map([
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
    this.setChordNotes = this.setChordNotes.bind(this)
    this.state = {}
  }

  componentWillMount() {
    this.setChordNotes(A)
  }

  /**
   * Fill an array using values from `source` filtered by values in
   * `sourceFilter`. Unmatched values will be replaced with `null`.
   *
   * Example inputs and output:
   *
   * source       [a, b, c, d, e, f, g]
   * sourceFilter [1, 0, 0, 1, 0, 0, 0]
   * result       [a,  ,  , d,  ,  ,  ]
   *
   * @param {Array} source
   * @param {Array} sourceFilter
   * @return {Array}
   */
  fillFromFilter(source, sourceFilter) {
    return sourceFilter
      .map((useValue, index) => (
        useValue ? source[index] : null)
      )
  }

  /**
   * Given an octave and some chordIntervals (which describe the interval
   * patterns of various chord types), describe the notes
   * contained in various chord types. The first note in the octave will be the
   * root note of all the chord types. Chord types are values like 'major',
   * 'minor' etc.
   *
   * For example, given an octave that starts with E, this function will return
   * the notes used in chords like E major, E minor etc.
   *
   * @param {Array} octave An array representing the 12 notes in an octave
   * @param {Map} chordIntervals Maps each chord type to an array of interval
   * filters
   * @param {Function} octaveFilter Combines an octave and a chordInterval filter to
   * describe the notes in a chord
   *
   * @return {Map} chords Describes the notes in each chord type provided by the
   * chordIntervals map
   */
  getChords(octave, chordIntervals, octaveFilter) {
    const chords = [...chordIntervals]
      .map(([name, intervals]) => (
        [ name, octaveFilter(octave, intervals) ]
      ))

      return new Map(chords)
  }

  /**
   * Given a root note and an octave, rotate the octave so that it starts with
   * the root note.
   *
   * @param {Symbol} root Represents a note
   * @param {Map} noteNames A Map of notes from A to G#
   */
  getOctaveFromRoot(root, noteNames) {
    const octaveKeys = [...noteNames.keys()]
    const rootOffset = octaveKeys.indexOf(root)
    const rootOctave = rotate(octaveKeys, rootOffset)
    return rootOctave
  }

  setChordNotes(root) {
    const {getOctaveFromRoot, getChords, fillFromFilter, chordIntervals, noteNames} = this
    const octave = getOctaveFromRoot(root, noteNames)
    const chords = getChords(octave, chordIntervals, fillFromFilter)
    this.setState({
      chords,
      octave,
      root,
    })
    // , () => {console.log('state', this.state)}
  }

  render() {
    return (
      <div>
        <Chords
          chords={this.state.chords}
          noteNames={this.noteNames}
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
