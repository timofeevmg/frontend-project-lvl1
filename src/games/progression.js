import { roundsCount, playGame } from '../index.js';
import { getRandomNum } from '../utils.js';

const getRandomNumFromIntervalIncl = (min, max) => {
  const range = max - min + 1;

  return Math.floor(Math.random() * range + min);
};

const getProgressionSequence = (length, step, firstElem) => {
  const progression = [];
  let elem = firstElem;

  for (let i = 0; i < length; i += 1) {
    progression.push(elem);

    elem += step;
  }

  return progression;
};

const getQuestionsAndCorrectAnswers = () => {
  const questions = [];
  const correctAnswers = [];
  const minSequenceLength = 5;
  const maxSequenceLength = 10;

  for (let round = 1; round <= roundsCount; round += 1) {
    const length = getRandomNumFromIntervalIncl(minSequenceLength, maxSequenceLength);
    const step = getRandomNum();
    const firstElem = getRandomNum();
    const progression = getProgressionSequence(length, step, firstElem);
    const idxToHide = getRandomNumFromIntervalIncl(0, length - 1);

    correctAnswers.push(progression[idxToHide].toString());

    progression[idxToHide] = '..';

    questions.push(progression.join(' '));
  }

  return [questions, correctAnswers];
};

export default () => {
  const description = 'What number is missing in the progression?';

  const questionsAndAnswers = getQuestionsAndCorrectAnswers();

  playGame(description, questionsAndAnswers);
};
