import { getRandomValue, gameBasis } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const trueAnswer = (firstNumber, secondNumber) => {
  let maxNumber = 0;
  let minNumber = 0;

  if (firstNumber < secondNumber) {
    [minNumber, maxNumber] = [firstNumber, secondNumber];
  } else {
    [minNumber, maxNumber] = [secondNumber, firstNumber];
  }

  let i = minNumber;
  while (maxNumber % i !== 0 || minNumber % i !== 0) {
    i -= 1;
  }
  return i;
};

const getRandomNumbers = () => {
  const firstNumber = getRandomValue(50);
  const secondNumber = getRandomValue(50);

  const answer = trueAnswer(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer];
};


const gameGcd = (userName) => {
  gameBasis(userName, getRandomNumbers, rules);
};

export default gameGcd;
