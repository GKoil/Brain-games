#!/usr/bin/env node

import getUserName from '../src/index.js';
import gameGcd from '../src/games/brain-gcd.js';

const userName = getUserName();
gameGcd(userName);
