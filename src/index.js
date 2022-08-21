import readlineSync from 'readline-sync';

export default (description, [tasks, correctAnswers]) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsCount = 3;

  for (let round = 1; round <= roundsCount; round += 1) {
    console.log(`Question: ${tasks[round - 1]}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswers[round - 1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[round - 1]}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
