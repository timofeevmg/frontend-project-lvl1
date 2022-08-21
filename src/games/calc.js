import playGame from '../index.js';
import { getRandomNum } from '../utils.js';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];
  const randomIdx = getRandomNum(operands.length);

  return operands[randomIdx];
};

const calculate = (numA, numB, operand) => {
  switch (operand) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
};

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];

  for (let i = 0; i <= 2; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randomOperand = getRandomOperand();

    tasks.push(`${numA} ${randomOperand} ${numB}`);
    correctAnswers.push(calculate(numA, numB, randomOperand).toString());
  }

  return [tasks, correctAnswers];
};

export default () => {
  const description = 'What is the result of the expression?';

  const tasksAndAnswers = getTasksAndCorrectAnswers();

  playGame(description, tasksAndAnswers);
};
