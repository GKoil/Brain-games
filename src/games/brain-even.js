import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genGameData = () => {
  const question = getRandom(0, 15);
  const answerQuestion = isEven(question);
  const answer = answerQuestion === true ? 'yes' : 'no';

  return [question, answer];
};

const startGameEven = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameEven;
