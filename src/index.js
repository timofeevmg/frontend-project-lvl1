import readlineSync from 'readline-sync';

export default (description, [tasks, correctAnswers]) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  let userAnswer;

  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${tasks[i]}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswers[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
