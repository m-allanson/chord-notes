import React from 'react'

import Link from '../Link'

import './index.css'

const Nav = () => (
  <nav className="Nav">
    <Link className="NavItem" pathname="/">Home</Link>
    <Link className="NavItem" pathname="/chord-notes">Chord notes</Link>
    <Link className="NavItem" pathname="/note-memoriser">Note memoriser</Link>
  </nav>
)

export default Nav
