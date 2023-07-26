const getFlag = require('./flag')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`);
