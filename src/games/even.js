import playGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isEven = (number) => number % 2 === 0;

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    tasks.push(getRandomNum());

    correctAnswers.push(isEven(tasks[i]) ? 'yes' : 'no');
  }

  return [tasks, correctAnswers];
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(rule, tasks, correctAnswers);
};
