#!/usr/bin/env node

import gameEven from '../src/games/brain-even.js';
import getUserName from '../src/index.js';

const userName = getUserName();
gameEven(userName);
