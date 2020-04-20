import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../../src/components/Badge/Badge';

it('renders correctly', () => {
  const tree = renderer.create(<Badge steps={4} />).toJSON();
  expect(tree).toMatchSnapshot();
});
