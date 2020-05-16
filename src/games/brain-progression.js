import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const lengthProgression = 10;
const gameTask = 'What number is missing in the progression?';

const genProgression = (firstNumber, step) => {
  const progression = [];
  for (let i = firstNumber; progression.length < lengthProgression; i += step) {
    progression.push(i);
  }
  return progression;
};

const genGameData = () => {
  const firstNumber = getRandom(0, 50);
  const step = getRandom(0, 20);
  const progression = genProgression(firstNumber, step);

  const randomNumber = getRandom(0, progression.length - 1);
  const answer = (progression[randomNumber]).toString();

  progression[randomNumber] = '..';
  const question = progression.join(' ');

  return [question, answer];
};


const startGameProgression = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameProgression;
