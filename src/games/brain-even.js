import { getRandomValue, gameBasis } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomQuestion = () => {
  const question = getRandomValue(15);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const gameEven = (userName) => {
  gameBasis(userName, getRandomQuestion, rules);
};

export default gameEven;
