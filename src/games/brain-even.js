import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomQuestion = () => {
  let answer = 'yes';
  const question = getRandom(0, 15);
  const answerQuestion = question % 2 === 0;

  if (!answerQuestion) {
    answer = 'no';
  }

  return [question, answer];
};

const gameEven = () => {
  runGameBasis(getRandomQuestion, rules);
};

export default gameEven;
