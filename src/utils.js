const getRandomNum = () => Math.round(Math.random() * 100);

const getRandomNumbersSequence = (count) => {
  const sequence = [];

  for (let i = 0; i < count; i += 1) {
    sequence.push(getRandomNum());
  }

  return sequence;
};

export { getRandomNum, getRandomNumbersSequence };
