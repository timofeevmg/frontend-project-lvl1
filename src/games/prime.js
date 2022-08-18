import playGame from '../index.js';
import getRandomNumbersSequence from '../getRandomNumbersSequence.js';

const isPrime = (num) => {
  if (num < 2) return false;

  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const tasksCount = 3;

export default () => {
  const tasks = getRandomNumbersSequence(tasksCount);

  const correctAnswers = tasks.map((num) => (isPrime(num) ? 'yes' : 'no'));

  playGame(rule, tasks, correctAnswers);
};
