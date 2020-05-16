import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGCD(secondNumber, firstNumber % secondNumber);
};

const genGameData = () => {
  const firstNumber = getRandom(0, 50);
  const secondNumber = getRandom(0, 50);

  const answer = getGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer.toString()];
};


const startGameGcd = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameGcd;
