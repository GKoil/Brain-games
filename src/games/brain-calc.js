import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const mathSings = ['*', '-', '+'];

const calculate = (firstNumber, seconNumber, sign) => {
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
  const mathSing = mathSings[getRandom(0, mathSings.length - 1)];
  const firstNumber = getRandom(0, 3);
  const secondNumber = getRandom(0, 3);

  const question = `${firstNumber} ${mathSing} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, mathSing).toString();

  return [question, answer];
};

const startGameCalc = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameCalc;
