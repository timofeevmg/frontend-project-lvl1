import readlineSync from 'readline-sync';

export default (rule, [tasks, correctAnswers]) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(rule);

  let userAnswer;

  const playRound = (task, correctAnswer) => {
    console.log(`Question: ${task}`);

    userAnswer = readlineSync.question('Your answer: ');

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
