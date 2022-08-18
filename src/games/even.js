import playGame from '../index.js';
import getRandomNumbersSequence from '../getRandomNumbersSequence.js';

const isEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const tasksCount = 3;

export default () => {
  const tasks = getRandomNumbersSequence(tasksCount);

  const correctAnswers = tasks.map((num) => (isEven(num) ? 'yes' : 'no'));

  playGame(rule, tasks, correctAnswers);
};
