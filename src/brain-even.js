import readlineSync from 'readline-sync';

const gameEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers !== 3) {
    const randomValue = Math.floor(Math.random() * 15);
    const trueAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's train again ${userName}`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
