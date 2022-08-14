import getRandomNum from './getRandomNum.js';

export default (symbols) => {
  const size = symbols.length;

  const randomNum = getRandomNum();

  const randomIdx = randomNum % size;

  return symbols[randomIdx];
};
