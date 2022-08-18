import getRandomNum from './getRandomNum.js';

export default (count) => {
  const sequence = [];

  for (let i = 0; i < count; i += 1) {
    sequence.push(getRandomNum());
  }

  return sequence;
};
