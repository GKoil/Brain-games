import runGameBasis from '../index.js';
import getRandomValue from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => {
  let answer = 'yes';
  let answerQuestion = false;
  const question = getRandomValue(0, 3);
  if (question < 2) {
    answerQuestion = false;
  } else if (question % 2 === 0 || question % 3 === 0 || question % 5 === 0) {
    answerQuestion = true;
  }

  if (!answerQuestion) {
    answer = 'no';
  }

  return [question, answer];
};


const gameIsPrime = () => {
  runGameBasis(getRandomNumber, rules);
};

export default gameIsPrime;
