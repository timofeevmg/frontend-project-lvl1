import playGame from '../index.js';
import { getRandomNumbersSequence } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const tasksCount = 3;
const tasks = getRandomNumbersSequence(tasksCount);

export default () => {
  const correctAnswers = tasks.map((num) => (isEven(num) ? 'yes' : 'no'));

  playGame(description, [tasks, correctAnswers]);
};
