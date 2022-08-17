import playGame from '../index.js';
import getRandomNum from '../getRandomNum.js';
import isPrime from '../isPrime.js';

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    tasks.push(getRandomNum());

    correctAnswers.push(isPrime(tasks[i]) ? 'yes' : 'no');
  }

  return [tasks, correctAnswers];
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(rule, tasks, correctAnswers);
};
