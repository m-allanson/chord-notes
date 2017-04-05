import React from 'react';
import ReactDOM from 'react-dom';
import ChordsContainer, { G } from './';

it('rotates an octave to have a root of G', () => {
  const component = new ChordsContainer()
  const {noteNames, getOctaveFromRoot} = component
  const root = G

  expect(
    getOctaveFromRoot(root, noteNames)
  ).toMatchSnapshot()
});

it('outputs the correct notes for G chords', () => {
  const component = new ChordsContainer()
  const {
    chordIntervals,
    noteNames,
    getOctaveFromRoot,
    getChords,
    fillFromFilter
  } = component
  const root = G
  const octave = getOctaveFromRoot(root, noteNames)

  expect(
    getChords(octave, chordIntervals, fillFromFilter)
  ).toMatchSnapshot()
});
