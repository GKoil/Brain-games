#!/usr/bin/env node

import game from '../src/brain-even.js';
import getUserName from '../src/index.js';

const userName = getUserName();
game(userName);
