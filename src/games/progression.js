import playGame from '../index.js';
import getRandomNum from '../getRandomNum.js';
import getRandomNumFromIntervalIncl from '../getRandomNumFromIntervalIncl.js';
import getProgressionSequence from '../getProgressionSequence.js';

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
