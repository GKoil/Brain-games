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

const gameCalc = (userName) => {
  const rules = 'What is the result of the expression?';
  const mathSymbols = ['*', '-', '+'];

  const randomMathSymbol = mathSymbols[getRandomValue(2)];
  const randomFirstNumber = getRandomValue(2); /* TODO: FIX values */
  const randomSecondNumber = getRandomValue(2);

  const question = `${randomFirstNumber} ${randomMathSymbol} ${randomSecondNumber}`;
  const answer = addNumbers(randomFirstNumber, randomSecondNumber, randomMathSymbol);

  const trueAnswer = 0;
  while (trueAnswer !== false) {
    gameBasis(userName, question, answer, rules, trueAnswer);
  }

  return true;
};

export default gameCalc;
