import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const addNumbers = (firstNumber, seconNumber, sign) => {
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

const rules = 'What is the result of the expression?';

const getRandomExpression = () => {
  const mathSymbols = ['*', '-', '+'];

  const randomMathSymbol = mathSymbols[getRandom(0, 2)];
  const randomFirstNumber = getRandom(0, 3);
  const randomSecondNumber = getRandom(0, 3);

  const question = `${randomFirstNumber} ${randomMathSymbol} ${randomSecondNumber}`;
  const answer = addNumbers(randomFirstNumber, randomSecondNumber, randomMathSymbol).toString();

  return [question, answer];
};

const gameCalc = () => {
  runGameBasis(getRandomExpression, rules);
};

export default gameCalc;
