#!/usr/bin/env node

import readlineSync from 'readline-sync';


const getUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
};

export default getUserName;