// @flow
import Intro from '../components/Intro'
import ChordsContainer from '../components/ChordsContainer'
import RandomNoteContainer from '../components/RandomNoteContainer'
import BarreChangesContainer from '../components/BarreChangesContainer'

const routes = {
  '/chord-notes': ChordsContainer,
  '/random-note': RandomNoteContainer,
  '/barre-changes': BarreChangesContainer,
  '/': Intro
}

export default routes
