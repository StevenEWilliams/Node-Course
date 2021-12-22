const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { demandOption } = require('yargs')

// const msg = chalk.blue.inverse.bold(getNotes())
// console.log(msg)

// console.log(validator.isURL(msg))

// add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.addNote(argv.title, argv.body) }
})

// remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title) }
})

//list
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() { console.log('Listing the notes')
        notes.listNotes()
    }
})

//read notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { console.log(chalk.blue.inverse('Reading the notes'))
        notes.readNote(argv.title)
    }
})

yargs.parse()
