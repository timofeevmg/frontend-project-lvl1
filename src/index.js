import getAnswer from './getAnswer.js';

export default (userName, tasks, correctAnswers) => {
  let userAnswer;

  const playRound = (task, correctAnswer) => {
    console.log(`Question: ${task}`);

    userAnswer = getAnswer('Your answer: ');

    return userAnswer === correctAnswer;
  };

  for (let i = 0; i <= 2; i += 1) {
    if (!playRound(tasks[i], correctAnswers[i])) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
