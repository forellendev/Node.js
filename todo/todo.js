const add = require('./utilities.js');
const notes = require('./notes.js');
const { default: validator } = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('Mike@example.com'));
console.log(validator.isURL('https://google.com'));
console.log(chalk.green.bgWhite.bold('Success'));