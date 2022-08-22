import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, [questions, correctAnswers]) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let round = 1; round <= roundsCount; round += 1) {
    console.log(`Question: ${questions[round - 1]}`);

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

export { roundsCount, playGame };
