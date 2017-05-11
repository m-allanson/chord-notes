// @flow
import React from 'react'

const Chord = ({ chord }) => (
  <div>
    <h3 style={{ marginBottom: 0 }}>{chord.root}</h3>
    <p>{chord.shape}-shape</p>
  </div>
)

const BarreChanges = ({ firstChord, secondChord, onClick }) => (
  <div className="container">
    <h2>Barre Changes</h2>
    <Chord chord={firstChord} />
    <p>to</p>
    <Chord chord={secondChord} />
    <button onClick={onClick}>Get different chords</button>
  </div>
)

export default BarreChanges
