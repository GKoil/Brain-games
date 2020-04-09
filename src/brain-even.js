import readlineSync from 'readline-sync';

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers !== 3) {
    const randomValue = Math.floor(Math.random() * 15);
    const trueAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!'); /* TODO:Make true answer */
      correctAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
    }
  }

  return console.log('Congratulations, Bill!');
};

export default game;
