import React from 'react';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import Game from '../../src/screens/Game/Game';
import { initialState } from '../../src/store/reducer';

it('renders correctly', () => {
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  useDispatch.mockReturnValue(jest.fn());

  const useSelector = jest.spyOn(redux, 'useSelector');
  useSelector.mockReturnValue({
    ...initialState,
    numbers: [1, 1, 2, 2, 3, 4, 5, 5, 6, 6],
  });

  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should handle onRestart', () => {
  const dispatch = jest.fn();
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  useDispatch.mockReturnValue(dispatch);
  const rendered = render(<Game />);
  const restartButton = rendered.getByText('Restart');
  expect(dispatch).not.toHaveBeenCalled();
  fireEvent(restartButton, 'press');
  expect(dispatch).toHaveBeenCalled();
});

it('should handle onCardPress', () => {
  const dispatch = jest.fn();
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  useDispatch.mockReturnValue(dispatch);
  const useSelector = jest.spyOn(redux, 'useSelector');
  useSelector.mockReturnValue({
    ...initialState,
    numbers: [1, 1, 2, 2, 3, 4, 5, 5, 6, 6],
  });
  const rendered = render(<Game />);
  const oneCards = rendered.getAllByText('1');

  const firstOneCard = oneCards[0];
  expect(dispatch).not.toHaveBeenCalled();
  fireEvent(firstOneCard, 'press');
  expect(dispatch).toHaveBeenCalled();
});

it('should handle onFlipOpened', () => {
  const dispatch = jest.fn();
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  useDispatch.mockReturnValue(dispatch);
  const useSelector = jest.spyOn(redux, 'useSelector');
  const mockedState = {
    ...initialState,
    numbers: [1, 2, 1, 2, 3, 4, 5, 5, 6, 6],
    firstSelected: { title: 1, id: 0 },
    secondSelected: { title: 2, id: 1 },
  };
  useSelector.mockReturnValue(mockedState);
  expect(dispatch).not.toHaveBeenCalled();
  render(<Game />);
  setTimeout(() => {
    expect(dispatch).toHaveBeenCalledTimes(3);
  }, 1000);
});
