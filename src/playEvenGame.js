import getAnswer from './getAnswer.js';
import getRandomNum from './getRandomNum.js';
import isEven from './isEven.js';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randonNumber;
let correctAnswer;
let userAnswer;

const playRound = () => {
  randonNumber = getRandomNum();

  console.log(`Question: ${randonNumber}`);

  correctAnswer = (isEven(randonNumber) ? 'yes' : 'no');

  userAnswer = getAnswer('Your answer: ');

  return userAnswer === correctAnswer;
};

export default () => {
  for (let i = 1; i <= 3; i += 1) {
    if (!playRound()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
