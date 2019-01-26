console.log('Starting App.js!');

const fs = require('fs');

const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;


var command = argv._[0];
console.log('command: ', command);

console.log('yargs', argv);

if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note Added`);
        notes.logNote(note);
    } else {
        console.log(`Note Title is already taken, try with different title`);
    }
}
else if (command === 'list') {

   var allNotes =  notes.getAll();
   console.log(`printing ${allNotes.length} note(S).`);
   allNotes.forEach(note => notes.logNote(note));
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Cannot find a Note'
    console.log(message);

}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('Not Found');
    }

}
else {
    console.log(`command not recoginzed`);
}
