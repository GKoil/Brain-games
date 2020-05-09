import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const mathSings = ['*', '-', '+'];

const calculateNumbers = (firstNumber, seconNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + seconNumber;
    case '-':
      return firstNumber - seconNumber;
    case '*':
      return firstNumber * seconNumber;
    default:
      return false;
  }
};

const gameTask = 'What is the result of the expression?';

const genGameData = () => {
  const randomMathSing = mathSings[getRandom(0, 2)];
  const firstNumber = getRandom(0, 3);
  const secondNumber = getRandom(0, 3);

  const question = `${firstNumber} ${randomMathSing} ${secondNumber}`;
  const answer = calculateNumbers(firstNumber, secondNumber, randomMathSing).toString();

  return [question, answer];
};

const startGameCalc = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameCalc;
