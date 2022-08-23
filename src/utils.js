const getRandomNum = (maxNumLimit = 100) => Math.floor(Math.random() * maxNumLimit);

const getRandomNumbersSequence = (count, maxNumLimit = 100) => {
  const sequence = [];

  for (let i = 0; i < count; i += 1) {
    sequence.push(getRandomNum(maxNumLimit));
  }

  return sequence;
};

const getRandomNumFromIntervalIncl = (min, max) => {
  const range = max - min + 1;

  return Math.floor(Math.random() * range + min);
};

export { getRandomNum, getRandomNumbersSequence, getRandomNumFromIntervalIncl };
