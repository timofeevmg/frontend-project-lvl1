import { roundsCount, playGame } from '../index.js';
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

const getQuestionsAndCorrectAnswers = () => {
  const questions = [];
  const correctAnswers = [];

  for (let round = 1; round <= roundsCount; round += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randomOperand = getRandomOperand();

    questions.push(`${numA} ${randomOperand} ${numB}`);
    correctAnswers.push(calculate(numA, numB, randomOperand).toString());
  }

  return [questions, correctAnswers];
};

export default () => {
  const description = 'What is the result of the expression?';

  const questionsAndAnswers = getQuestionsAndCorrectAnswers();

  playGame(description, questionsAndAnswers);
};
