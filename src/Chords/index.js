import React from 'react'

import './index.css';

const Chords = ({
  chords,
  noteNames,
  octave,
  onNoteClick,
  root,
}) => {
  return (
    <div>
      <h2>Root note: {noteNames.get(root)}</h2>
      <div className="Octave">
      {
        octave.map(key => (
            <a
              className="OctaveNote"
              key={noteNames.get(key)}
              onClick={() => onNoteClick(key)}
            >
              {` ${noteNames.get(key)} `}
            </a>
          ))
      }
      </div>
      {
        [...chords]
          .map(([chordType, notes]) => (
            <div key={chordType}>
              {/*<div className="ChordType">
                {chordType}
              </div>*/}
              <div className="ChordNotes">
                {[...notes].map((note, i) => {
                  const value = note ? noteNames.get(note) : ' '
                  return <div key={i} className="ChordNote">{value}</div>
                })}
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Chords
