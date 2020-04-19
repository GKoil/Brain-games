#!/usr/bin/env node

import gameEven from '../src/brain-even.js';
import getUserName from '../src/index.js';

const userName = getUserName();
gameEven(userName);
