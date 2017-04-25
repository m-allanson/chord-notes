// @flow
import React from 'react'

import Link from '../Link'

const Intro = () => (
  <div>
    <h1>Welcome</h1>
    <ul>
      <li>
        <Link pathname="/chord-notes">Chord notes</Link>
      </li>
      <li>
        <Link pathname="/note-memoriser">Note memoriser</Link>
      </li>
    </ul>
  </div>
)

export default Intro
