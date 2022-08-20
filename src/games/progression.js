import playGame from '../index.js';
import { getRandomNum } from '../utils.js';

const getRandomNumFromIntervalIncl = (min, max) => {
  const range = max - min + 1;

  return Math.floor(Math.random() * range + min);
};

const getProgressionSequence = (size, step, begin) => {
  const progression = [];
  let elem = begin;

  for (let i = 0; i < size; i += 1) {
    progression.push(elem);

    elem += step;
  }

  return progression;
};

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    const size = getRandomNumFromIntervalIncl(5, 10);
    const step = getRandomNum();
    const begin = getRandomNum();
    const progression = getProgressionSequence(size, step, begin);
    const idxToHide = getRandomNumFromIntervalIncl(0, size - 1);

    correctAnswers.push(progression[idxToHide].toString());

    progression[idxToHide] = '..';

    tasks.push(progression.join(' '));
  }

  return [tasks, correctAnswers];
};

export default () => {
  const rule = 'What number is missing in the progression?';

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(rule, tasks, correctAnswers);
};
