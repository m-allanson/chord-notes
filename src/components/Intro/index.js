// @flow
import React from 'react'

import Link from '../Link'

const Intro = () => (
  <div className="container">
    <h1>Welcome</h1>
    <div>
      <Link pathname="/chord-notes">Chord notes</Link>
      <p>Visualise the relationship between chords in each key</p>
    </div>
    <div>
      <Link pathname="/note-memoriser">Note memoriser</Link>
      <p>Generates random notes names to help with learning their positions</p>
    </div>
  </div>
)

export default Intro
