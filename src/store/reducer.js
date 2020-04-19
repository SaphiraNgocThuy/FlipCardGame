import { FLIP_ALL, PRESS_CARD, FLIP_OPENED, GET_NUMBERS } from "./constants";
import { getNumbers } from "../utils/helper";

export const initialState = {
  steps: 0,
  numbers: getNumbers(),
  firstSelected: null,
  secondSelected: null,
  resolved: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const { firstSelected, secondSelected, resolved, numbers } = newState;

  switch (action.type) {
    case PRESS_CARD:
      if (!firstSelected) {
        newState.firstSelected = { ...action };
      } else if (!secondSelected) {
        newState.secondSelected = { ...action };
      } else {
        if (firstSelected.title === secondSelected.title) {
          newState.resolved = [
            ...resolved,
            firstSelected.id,
            secondSelected.id,
          ];
        }
        newState.firstSelected = { ...action };
        newState.secondSelected = null;
      }
      newState.steps += 1;
      return newState;

    case FLIP_OPENED:
      if (firstSelected && secondSelected) {
        if (firstSelected.title === secondSelected.title) {
          newState.resolved = [
            ...resolved,
            firstSelected.id,
            secondSelected.id,
          ];
        }
        newState.firstSelected = null;
        newState.secondSelected = null;
      }
      return newState;

    case FLIP_ALL:
      return { ...initialState, numbers };
    case GET_NUMBERS:
      return { ...initialState, numbers: getNumbers() };

    default:
      return state;
  }
};
export default reducer;
