import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const Nav = () => (
  <nav className="Nav">
    <Link className="NavItem" to="/">Home</Link>
    <Link className="NavItem" to="/chord-notes">Chord notes</Link>
    <Link className="NavItem" to="/random-note">Random note</Link>
    <Link className="NavItem" to="/barre-changes">Barre changes</Link>
  </nav>
)

export default Nav
