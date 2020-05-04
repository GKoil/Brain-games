import runGameBasis from '../index.js';
import getRandom from '../utils.js';

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
  const firstNumber = getRandom(0, 50);
  const secondNumber = getRandom(0, 50);

  const answer = trueAnswer(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer];
};


const gameGcd = () => {
  runGameBasis(getRandomNumbers, rules);
};

export default gameGcd;
