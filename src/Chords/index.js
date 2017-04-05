import React from 'react'

import './index.css';

const Chords = ({
  chords,
  noteNames,
  octave,
  onNoteClick,
  root,
}) => {
  const rootName = noteNames.get(root)
  return (
    <div>
      <h2>Root note: {rootName}</h2>
      <table className="ChordTable">
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
        <tbody className="ChordTableHead">
          <tr className="Octave">
            <th className="Col1">Notes</th>
          {
            octave.map((note, i) => (
              <th className={`OctaveNote OctaveNote${i}`} key={i}>
                <a className="OctaveNoteInner" onClick={() => onNoteClick(note)}>
                  {noteNames.get(note)}
                </a>
              </th>
            ))
          }
          </tr>
        </tbody>
      </table>
      <h2>Notes appearing in {rootName} chords</h2>

      <table className="ChordTable">
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
        {
          [...chords]
            .map(([chordType, notes]) => (
              <tr className="Chord" key={chordType}>
                <td className="Col1">
                  {rootName} {chordType}
                </td>
                {
                  [...notes].map((note, i) => (
                    <td key={i} className="ChordNote" >
                      {noteNames.get(note) || ''}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Chords
