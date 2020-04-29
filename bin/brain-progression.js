#!/usr/bin/env node

import getUserName from '../src/index.js';
import gameProgression from '../src/games/brain-progression.js';

const userName = getUserName();
gameProgression(userName);
