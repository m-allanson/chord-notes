import React from 'react'

import Link from '../Link'

import './index.css'

const Nav = () => (
  <nav className="Nav">
    <Link className="NavItem" pathname="/">Home</Link>
    <Link className="NavItem" pathname="/chord-notes">Chord notes</Link>
    <Link className="NavItem" pathname="/random-note">Random note</Link>
    <Link className="NavItem" pathname="/barre-changes">Barre changes</Link>
  </nav>
)

export default Nav
