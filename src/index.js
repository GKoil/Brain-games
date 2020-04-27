import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomValue = (values) => Math.floor(Math.random() * values);

export const gameBasis = (userName, getQuestionAnswer, rules) => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${userAnswer}` === `${answer}`) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's train again ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getUserName;
