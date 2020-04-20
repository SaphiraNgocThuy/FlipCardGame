import reducer, { initialState } from '../../src/store/reducer';
import {
  PRESS_CARD,
  FLIP_OPENED,
  FLIP_ALL,
  GET_NUMBERS,
} from '../../src/store/constants';
import { getNumbers } from '../../src/utils/helper';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle PRESS_CARD', () => {
    const action1 = { title: 1, id: 1, type: PRESS_CARD };
    const newState1 = {
      ...initialState,
      firstSelected: action1,
      steps: 1,
    };
    expect(reducer(initialState, action1)).toEqual(newState1);

    const action2a = { ...action1, title: 1, id: 2 };
    const newState2a = { ...newState1, secondSelected: action2a, steps: 2 };
    expect(reducer(newState1, action2a)).toEqual(newState2a);

    const action3 = { ...action1, title: 3, id: 3 };
    const newState3a = {
      ...initialState,
      firstSelected: action3,
      resolved: [1, 2],
      steps: 3,
    };
    expect(reducer(newState2a, action3)).toEqual(newState3a);

    const action2b = { ...action1, title: 2, id: 2 };
    const newState2b = { ...newState1, secondSelected: action2b, steps: 2 };
    const newState3b = { ...initialState, firstSelected: action3, steps: 3 };
    expect(reducer(newState2b, action3)).toEqual(newState3b);
  });

  it('should handle FLIP_OPENED', () => {
    const action = { title: 1, id: 1, type: FLIP_OPENED };
    expect(reducer(initialState, action)).toEqual(initialState);

    expect(
      reducer(
        {
          ...initialState,
          firstSelected: { title: 1, id: 1 },
          secondSelected: { title: 2, id: 2 },
        },
        action
      )
    ).toEqual({ ...initialState });

    expect(
      reducer(
        {
          ...initialState,
          firstSelected: { title: 1, id: 1 },
          secondSelected: { title: 1, id: 2 },
        },
        action
      )
    ).toEqual({ ...initialState, resolved: [1, 2] });
  });

  it('should handle FLIP_ALL', () => {
    const action = { title: 1, id: 1, type: FLIP_ALL };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('should handle GET_NUMBERS', () => {
    const action = { title: 1, id: 1, type: GET_NUMBERS };
    const numbers = getNumbers();
    expect(reducer(initialState, action).numbers).not.toEqual(
      initialState.numbers
    );
  });
});
