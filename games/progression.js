import playGame from '../src/index.js';
import getRandomNum from '../src/getRandomNum.js'; // ???
import getRandomNumFromIntervalIncl from '../src/getRandomNumFromIntervalIncl.js';
import getProgressionSequence from '../src/getProgressionSequence.js';

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
