const add = require('./utilities.js');
const notes = require('./notes.js');
const { default: validator } = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('Mike@example.com'));
console.log(validator.isURL('https://google.com'));
console.log(chalk.green.bgWhite.bold('Success'));

// Path to node executable, file and params
console.log(process.argv);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note...');
} else if (command === 'remove') {
    console.log('Removing note...');
}