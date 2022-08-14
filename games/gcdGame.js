import welcome from '../src/welcome.js';
import getUserName from '../src/getUserName.js';
import greetUser from '../src/greetUser.js';
import announceRule from '../src/announceRule.js';
import playGame from '../src/index.js';
import getRandomNum from '../src/getRandomNum.js';
import gcd from '../src/gcd.js';

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();

    tasks.push(`${numA} ${numB}`);
    correctAnswers.push(gcd(numA, numB).toString());
  }

  return [tasks, correctAnswers];
};

export default () => {
  welcome('Welcome to the Brain Games!');

  const userName = getUserName('May I have your name? ');

  greetUser(`Hello, ${userName}!`);

  announceRule('Find the greatest common divisor of given numbers.');

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(userName, tasks, correctAnswers);
};
