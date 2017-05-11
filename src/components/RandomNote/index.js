// @flow
import React from 'react'

const RandomNote = ({ note, onClick }) => (
  <div className="container">
    <h2>Random note</h2>
    <h3>{note}</h3>
    <button onClick={onClick}>Get another note</button>
  </div>
)

export default RandomNote
