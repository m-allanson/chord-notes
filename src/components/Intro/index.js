// @flow
import React from 'react'

import { Link } from 'react-router-dom'

const Intro = () => (
  <div className="container">
    <h1>Welcome</h1>
    <div>
      <Link to="/chord-notes">Chord notes</Link>
      <p>Visualise the relationship between chords in each key</p>
    </div>
    <div>
      <Link to="/random-note">Random Note</Link>
      <p>
        Show a random note. I use this to help with learning the positions of each note.
      </p>
    </div>
    <div>
      <Link to="/barre-changes">Barre chord changes</Link>
      <p>
        Practice changing between two random E-shaped or A-shaped barre chords
      </p>
    </div>
  </div>
)

export default Intro
