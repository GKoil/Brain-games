import runGameBasis from '../index.js';
import getRandomValue from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => (value % 2 === 0 || value % 3 === 0 || value % 5 === 0) && value > 2;

const getRandomNumber = () => {
  let answer = 'yes';
  const question = getRandomValue(0, 3);
  const answerQuestion = isPrime(question);

  if (!answerQuestion) {
    answer = 'no';
  }

  return [question, answer];
};


const gameIsPrime = () => {
  runGameBasis(getRandomNumber, rules);
};

export default gameIsPrime;
