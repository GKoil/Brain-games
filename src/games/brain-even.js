import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genGameData = () => {
  const question = getRandom(0, 15);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const startGameEven = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameEven;
