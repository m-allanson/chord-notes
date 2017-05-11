// @flow
import randomInt from './randomInt'

const A = Symbol('A')
const A_SHARP = Symbol('A_SHARP')
const B = Symbol('B')
const C = Symbol('C')
const C_SHARP = Symbol('C_SHARP')
const D = Symbol('D')
const D_SHARP = Symbol('D_SHARP')
const E = Symbol('E')
const F = Symbol('F')
const F_SHARP = Symbol('F_SHARP')
const G = Symbol('G')
const G_SHARP = Symbol('G_SHARP')

export const octave = {
  a: A,
  aSharp: A_SHARP,
  b: B,
  c: C,
  cSharp: C_SHARP,
  D: D,
  dSharp: D_SHARP,
  e: E,
  f: F,
  fSharp: F_SHARP,
  g: G,
  gSharp: G_SHARP
}

export const noteNames = new Map([
  [A, ['A']],
  [A_SHARP, ['A#', 'Bb']],
  [B, ['B']],
  [C, ['C']],
  [C_SHARP, ['C#', 'Db']],
  [D, ['D']],
  [D_SHARP, ['D#', 'Eb']],
  [E, ['E']],
  [F, ['F']],
  [F_SHARP, ['F#', 'Gb']],
  [G, ['G']],
  [G_SHARP, ['G#', 'Ab']]
])

// Given a Map of notes and their names, pick a note at random, then return
// one note name e.g. 'C#' or 'Db'
export const getRandomNoteName = noteNames => {
  const notes = [...noteNames.values()]
  const count = noteNames.size
  const names = notes[randomInt(count)]
  return names[randomInt(names.length)]
}
