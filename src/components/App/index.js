// @flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BarreChangesContainer from '../BarreChangesContainer'
import ChordsContainer from '../ChordsContainer'
import Intro from '../Intro'
import Nav from '../Nav'
import RandomNoteContainer from '../RandomNoteContainer'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Intro} />
      <Route path="/chord-notes" component={ChordsContainer} />
      <Route path="/random-note" component={RandomNoteContainer} />
      <Route path="/barre-changes" component={BarreChangesContainer} />
    </div>
  </Router>
)

export default App
