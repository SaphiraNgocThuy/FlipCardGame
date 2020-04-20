import { FLIP_ALL, PRESS_CARD, FLIP_OPENED, GET_NUMBERS } from './constants';

export const restart = () => (dispatch) => {
  dispatch({ type: FLIP_ALL });
  setTimeout(() => {
    dispatch({ type: GET_NUMBERS });
  }, 30);
};

export const pressCard = (title, id) => (dispatch) =>
  dispatch({ type: PRESS_CARD, title, id });

export const flipOpened = () => (dispatch) => dispatch({ type: FLIP_OPENED });
