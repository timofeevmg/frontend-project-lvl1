import playGame from '../index.js';
import { getRandomNum } from '../utils.js';

const calculateGcd = (a, b) => {
  let x = a;
  let y = b;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return x + y;
};

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();

    tasks.push(`${numA} ${numB}`);
    correctAnswers.push(calculateGcd(numA, numB).toString());
  }

  return [tasks, correctAnswers];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const tasksAndAnswers = getTasksAndCorrectAnswers();

  playGame(description, tasksAndAnswers);
};
