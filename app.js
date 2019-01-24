console.log('Starting App.js!');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;
// console.log(process.argv);

var command = argv._[0];
console.log('command: ',command);
console.log('process: ',process.argv);
console.log('yargs',argv);

if(command === 'add'){
    // console.log(`adding nodes`);
    notes.addNote(argv.title,argv.body);
}
else if(command === 'list'){
    // console.log('listing a list');
    notes.getAll();
}
else if(command === 'remove'){
    notes.removeNote(argv.title);
    // console.log('removing a list');
}
else if(command === 'read'){
    notes.getNote(argv.title);
    // console.log('reading a list');
}
else{
    console.log(`command not recoginzed`);
}
// var res = notes.addNote();

// console.log(_.isString(true));
// console.log(_.isString('true'));

// var filteredArray = _.uniq(['Hassan']);
// console.log(filteredArray);

// console.log(res);

// console.log('results' , notes.add(9,-7));

// var user = os.userInfo();
// console.log(user);
// console.log(os.arch());


// console.log(os.constants);
// fs.appendFileSync('greeting.txt',`Hello ${user.username}! you are ${notes.age}.`);
