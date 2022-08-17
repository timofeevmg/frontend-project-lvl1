import playGame from '../index.js';
import getRandomNum from '../getRandomNum.js';
import findGcd from '../findGcd.js';

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();

    tasks.push(`${numA} ${numB}`);
    correctAnswers.push(findGcd(numA, numB).toString());
  }

  return [tasks, correctAnswers];
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(rule, tasks, correctAnswers);
};
