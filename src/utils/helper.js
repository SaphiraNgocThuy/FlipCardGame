import Constants from "expo-constants";

export const getStatusBarHeight = () => Constants.statusBarHeight;

export const getNumbers = () => {
  const array = Array.from({ length: 6 }, () =>
    Math.floor(1 + Math.random() * 100)
  );
  return shuffleArray([...array, ...array]);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
