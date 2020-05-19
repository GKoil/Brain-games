import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const lengthProgression = 10;
const gameTask = 'What number is missing in the progression?';

const genProgression = (firstNumber, step) => {
  const progression = [];
  for (let current = firstNumber; progression.length < lengthProgression; current += step) {
    progression.push(current);
  }
  return progression;
};

const genGameData = () => {
  const firstNumber = getRandom(0, 50);
  const step = getRandom(0, 20);
  const progression = genProgression(firstNumber, step);

  const hiddenElementIndex = getRandom(0, progression.length - 1);
  const answer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};


const startGameProgression = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameProgression;
