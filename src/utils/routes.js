// @flow
import Intro from '../components/Intro'
import ChordsContainer from '../components/ChordsContainer'
import NoteMemoriserContainer from '../components/NoteMemoriserContainer'

const routes = {
  '/chord-notes': ChordsContainer,
  '/note-memoriser': NoteMemoriserContainer,
  '/': Intro
}

export default routes
