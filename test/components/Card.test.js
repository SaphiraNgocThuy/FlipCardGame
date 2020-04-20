import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../src/components/Card/Card';
import { render, fireEvent } from 'react-native-testing-library';

it('renders when not open', () => {
  const tree = renderer
    .create(
      <Card
        title={1}
        id={1}
        isOpened={false}
        onCardPress={() => {}}
        onFlipOpened={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders if opened', () => {
  const tree = renderer
    .create(
      <Card
        title={1}
        id={1}
        isOpened={true}
        onCardPress={() => {}}
        onFlipOpened={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('onPress when card is not open', () => {
  const onCardPress = jest.fn();
  const rendered = render(
    <Card
      title={1}
      id={1}
      isOpened={false}
      {...{ onCardPress }}
      onFlipOpened={() => {}}
    />
  );
  const button = rendered.getByTestId('touchable');
  fireEvent(button, 'press');
  expect(onCardPress).toHaveBeenCalledWith(1, 1);
});

it('onPress when card is open', () => {
  const onCardPress = jest.fn();
  const rendered = render(
    <Card
      title={1}
      id={1}
      isOpened
      {...{ onCardPress }}
      onFlipOpened={() => {}}
    />
  );
  const button = rendered.getByTestId('touchable');
  fireEvent(button, 'press');
  expect(onCardPress).not.toHaveBeenCalled();
});
