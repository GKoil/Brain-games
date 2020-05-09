import runGameBasis from '../index.js';
import getRandom from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getRandomProgression = () => {
  const arrayProgression = [];
  const firstPosition = getRandom(0, 50);
  const stepProgression = getRandom(0, 20);
  const lengthProgression = 10;
  for (let i = firstPosition; arrayProgression.length < lengthProgression; i += stepProgression) {
    arrayProgression.push(i);
  }
  return arrayProgression;
};

const genGameData = () => {
  const progression = getRandomProgression();
  const randomNumber = getRandom(0, progression.length);
  const answer = (progression[randomNumber]).toString();
  const outputProgression = progression;
  outputProgression[randomNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};


const startGameProgression = () => {
  runGameBasis(genGameData, gameTask);
};

export default startGameProgression;
