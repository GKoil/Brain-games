#!/usr/bin/env node

import getUserName from '../src/index.js';
import gameCalc from '../src/games/brain-calc.js';

const userName = getUserName();
gameCalc(userName);
