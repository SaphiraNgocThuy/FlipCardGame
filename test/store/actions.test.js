import {
  PRESS_CARD,
  FLIP_OPENED,
  FLIP_ALL,
  GET_NUMBERS,
} from '../../src/store/constants';
import * as actions from '../../src/store/actions';

describe('actions', () => {
  it('restart', () => {
    const dispatch = jest.fn();
    actions.restart()(dispatch);
    expect(dispatch).toBeCalledWith({ type: FLIP_ALL });
    setTimeout(() => {
      expect(dispatch).toBeCalledWith({ type: GET_NUMBERS });
    }, 30);
  });

  it('pressCard', () => {
    const dispatch = jest.fn();
    actions.pressCard(1, 1)(dispatch);
    expect(dispatch).toBeCalledWith({ type: PRESS_CARD, title: 1, id: 1 });
  });

  it('flipOpened', () => {
    const dispatch = jest.fn();
    actions.flipOpened()(dispatch);
    expect(dispatch).toBeCalledWith({ type: FLIP_OPENED });
  });
});
