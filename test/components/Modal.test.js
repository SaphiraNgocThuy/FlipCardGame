import React from 'react';
import renderer from 'react-test-renderer';
import CongratsModal from '../../src/components/Modal/CongratsModal';

it('renders correctly', () => {
  const tree = renderer
    .create(<CongratsModal visible={true} onPress={() => {}} steps={4} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
