import React from 'react'

import './index.css'

const Chords = ({ chords, noteNames, octave, onNoteClick, root }) => {
  const rootName = noteNames.get(root)
  return (
    <div className="Chords container">
      <div className="ChordsHeader">
        <h2>Chord notes</h2>
        <p>Choose a root note to see how its chords are built</p>
      </div>
      <table className="ChordsTable">
        <colgroup>
          <col span="1" style={{ width: '16%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
        </colgroup>
        <tbody className="ChordsTableHead">
          <tr className="ChordsOctave">
            <th className="ChordsCol1">Root note</th>
            {octave.map((note, i) => (
              <th className={`ChordsOctaveNote ChordsOctaveNote${i}`} key={i}>
                <a
                  className="ChordsOctaveNoteInner"
                  onClick={() => onNoteClick(note)}
                >
                  {noteNames.get(note)}
                </a>
              </th>
            ))}
          </tr>
          <tr className="ChordsIntervals">
            <th className="ChordsCol1">Intervals</th>
            <th className="ChordsInterval">I</th>
            <th className="ChordsInterval">II</th>
            <th className="ChordsInterval">III</th>
            <th className="ChordsInterval">IV</th>
            <th className="ChordsInterval">V</th>
            <th className="ChordsInterval">VI</th>
            <th className="ChordsInterval">VII</th>
            <th className="ChordsInterval">VIII</th>
            <th className="ChordsInterval">IX</th>
            <th className="ChordsInterval">X</th>
            <th className="ChordsInterval">X</th>
            <th className="ChordsInterval">XII</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th colSpan={13}>Chords in {rootName}</th>
          </tr>
        </tbody>
        <colgroup>
          <col span="1" style={{ width: '16%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
          <col span="1" style={{ width: '7%' }} />
        </colgroup>
        <tbody>
          {[...chords].map(([chordType, notes]) => (
            <tr className="ChordsItem" key={chordType}>
              <td className="Col1">
                {rootName} {chordType}
              </td>
              {[...notes].map((note, i) => (
                <td key={i} className="ChordsItemNote">
                  {noteNames.get(note) || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Chords
