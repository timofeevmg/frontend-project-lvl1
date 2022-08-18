import playGame from '../index.js';
import getRandomNumbersSequence from '../getRandomNumbersSequence.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswers = (tasks) => {
  const correctAnswers = [];

  for (let i = 0; i < tasks.length; i += 1) {
    correctAnswers.push(isEven(tasks[i]) ? 'yes' : 'no');
  }

  return correctAnswers;
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const tasksCount = 3;

export default () => {
  const tasks = getRandomNumbersSequence(tasksCount);

  const correctAnswers = getCorrectAnswers(tasks);

  playGame(rule, tasks, correctAnswers);
};
