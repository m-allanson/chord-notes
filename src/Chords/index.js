import React from 'react'

const Chords = ({
  noteNames,
  onNoteClick,
  chords,
  root,
}) => {
  // console.log('noteNames', noteNames)
  // const notes = [...noteNames.keys()]
  // const offset = notes.indexOf(root)

  return (
    <div>
      <h2>Choose root note</h2>
      {
        [...noteNames]
          .map(([key, value]) => (
            <a
              key={value}
              onClick={() => onNoteClick(key)}
            >
              {` ${value} `}
            </a>
          ))
      }
      {
        chords &&
        [...chords]
          .map(([type, notes]) => (
            <p key={type}>
              <span>{type}: </span>
              {notes.join(', ')}
            </p>
          ))
      }
    </div>
  )
}

export default Chords
