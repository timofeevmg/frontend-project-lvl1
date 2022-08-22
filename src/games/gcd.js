import { roundsCount, playGame } from '../index.js';
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

const getQuestionsAndCorrectAnswers = () => {
  const questions = [];
  const correctAnswers = [];

  for (let round = 1; round <= roundsCount; round += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();

    questions.push(`${numA} ${numB}`);
    correctAnswers.push(calculateGcd(numA, numB).toString());
  }

  return [questions, correctAnswers];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const questionsAndAnswers = getQuestionsAndCorrectAnswers();

  playGame(description, questionsAndAnswers);
};
