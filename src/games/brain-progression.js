import { getRandomValue, gameBasis } from '../index.js';

const rules = 'What number is missing in the progression?';

const getRandomProgression = () => {
  const arrayProgression = [];
  const firstPosition = getRandomValue(50);
  const stepProgression = getRandomValue(20);
  const lengthProgression = 10;
  for (let i = firstPosition; arrayProgression.length < lengthProgression; i += stepProgression) {
    arrayProgression.push(i);
  }
  return arrayProgression;
};

const getQuestionProgression = () => {
  const progression = getRandomProgression();
  const randomNumber = getRandomValue(progression.length);
  const answer = progression[randomNumber];
  const outputProgression = progression;
  outputProgression[randomNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};


const gameProgression = (userName) => {
  gameBasis(userName, getQuestionProgression, rules);
};

export default gameProgression;
