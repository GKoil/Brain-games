#!/usr/bin/env node

import getUserName from '../src/index.js';
import gameIsPrime from '../src/games/brain-prime.js';

const userName = getUserName();
gameIsPrime(userName);
