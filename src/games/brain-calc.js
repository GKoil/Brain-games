import { getRandomValue, gameBasis } from '../index.js';

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

  const randomMathSymbol = mathSymbols[getRandomValue(2)];
  const randomFirstNumber = getRandomValue(3);
  const randomSecondNumber = getRandomValue(3);

  const question = `${randomFirstNumber} ${randomMathSymbol} ${randomSecondNumber}`;
  const answer = addNumbers(randomFirstNumber, randomSecondNumber, randomMathSymbol);

  return [question, answer];
};

const gameCalc = (userName) => {
  gameBasis(userName, getRandomExpression, rules);
};

export default gameCalc;
