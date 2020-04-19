#!/usr/bin/env node

import getUserName from '../src/index.js';
import game from '../src/brain-even.js';

const getHello = () => console.log('Welcome to the Brain Games!');
getHello();
const userName = getUserName();
game(userName);
