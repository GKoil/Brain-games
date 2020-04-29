import { getRandomValue, gameBasis } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => {
  const question = getRandomValue(3);
  const answer = (question % 2 === 0 || question % 3 === 0 || question % 5 === 0) && question > 0 ? 'yes' : 'no';

  return [question, answer];
};


const gameIsPrime = (userName) => {
  gameBasis(userName, getRandomNumber, rules);
};

export default gameIsPrime;
