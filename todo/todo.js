const add = require('./utilities.js');
const notes = require('./notes.js');
const { default: validator } = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('2.0.0');

console.log(validator.isEmail('Mike@example.com'));
console.log(validator.isURL('https://google.com'));
console.log(chalk.green.bgWhite.bold('Success'));

// Path to node executable, file and params
// console.log(process.argv);

// Add note
yargs.command({
    command: 'add',
    describe: 'Add new note.',
    handler: function() {
        console.log('Note added.');
    }
});

// Delete note
yargs.command({
    command: 'delete',
    describe: 'Delete a note.',
    handler: function() {
        console.log('Note removed.');
    }
});

// Read note
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function() {
        console.log('Read a note');
    }
});

// List all notes
yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: function() {
        console.log('List all notes');
    }
});

console.log(yargs.argv);