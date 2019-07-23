const chalk = require('chalk')
const yargs = require('yargs')
const ffcs = require('./ffcs.js')

// Customized yargs version 
yargs.version('1.1.0')

// Add command
yargs.command({
    command: 'add',
    describe: 'Add a new timetable',
    handler(){
        ffcs.addTable()
    }
})

// Add through JSON command
yargs.command({
    command: 'addJSON',
    describe: 'Add a new timetable through JSON Input',
    handler(){
        ffcs.addJSONTable()
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a timetable',
    handler(){
        ffcs.removeTable()
    }
})

// View command
yargs.command({
    command: 'view',
    describe: 'View who is free at a particular time',
    handler(){
        ffcs.viewTable()
    }
})

//View deskduty
yargs.command({
    command: 'desk',
    describe: 'View Deskduty Timetable',
    handler(){
        ffcs.deskDuty()
    }
})


yargs.parse()