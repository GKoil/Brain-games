import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomValue = (values) => Math.floor(Math.random() * values);

export const gameBasis = (userName, question, answer, rules, trueAnswer) => {
  console.log(rules);

  while (trueAnswer !== 3) { /* TODO: FIX this counter */
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${userAnswer}` === `${answer}`) {
      console.log('Correct!');
      console.log(`correct ${trueAnswer}`);
      return trueAnswer + 1;
    }
    return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's train again ${userName}`);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getUserName;
