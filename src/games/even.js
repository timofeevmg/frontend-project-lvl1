import { roundsCount, playGame } from '../index.js';
import { getRandomNumbersSequence } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = getRandomNumbersSequence(roundsCount);

export default () => {
  const correctAnswers = questions.map((num) => (isEven(num) ? 'yes' : 'no'));

  playGame(description, [questions, correctAnswers]);
};
