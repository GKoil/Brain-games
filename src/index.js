import readlineSync from 'readline-sync';

const gameRoundCount = 3;

const runGameBasis = (getQuestionAnswer, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  for (let i = 0; i < gameRoundCount; i += 1) {
    const [question, answer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's train again ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameBasis;
