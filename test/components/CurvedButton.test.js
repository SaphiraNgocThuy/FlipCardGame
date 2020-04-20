import React from 'react';
import renderer from 'react-test-renderer';
import CurvedButton from '../../src/components/Button/CurvedButton';

it('render normal button', () => {
  const tree = renderer
    .create(<CurvedButton title="test" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render left side button', () => {
  const tree = renderer
    .create(<CurvedButton title="test" onPress={() => {}} left />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
