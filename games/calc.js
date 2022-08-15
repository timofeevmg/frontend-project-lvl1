import playGame from '../src/index.js';
import getRandomNum from '../src/getRandomNum.js';
import getRandomSymbol from '../src/getRandomSymbol.js';

const getTasksAndCorrectAnswers = () => {
  const tasks = [];
  const correctAnswers = [];
  const operands = ['+', '-', '*'];

  const calculateAnswer = (numA, numB, operand) => {
    switch (operand) {
      case '+':
        return numA + numB;
      case '-':
        return numA - numB;
      default:
        return numA * numB;
    }
  };

  for (let i = 0; i <= 2; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randomOperand = getRandomSymbol(operands);

    tasks.push(`${numA} ${randomOperand} ${numB}`);
    correctAnswers.push(calculateAnswer(numA, numB, randomOperand).toString());
  }

  return [tasks, correctAnswers];
};

export default () => {
  const rule = 'What is the result of the expression?';

  const [tasks, correctAnswers] = getTasksAndCorrectAnswers();

  playGame(rule, tasks, correctAnswers);
};