import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const genGameData = () => {
  const question = getRandom(0, 3);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const startGameIsPrime = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameIsPrime;
