const fs = require('fs')
const chalk = require('chalk')
const { Color } = require('chalk')

const addNote = (title, body) =>   {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note Added!")
    }
    else {
        console.log("Duplicate note Title!")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesList = notes.filter((note) => { note.title !== title })

    if (notesList.length === notes.length) {
        console.log(chalk.red("Note not Found!"))
    }
    else{
        saveNotes(notesList)
        console.log(chalk.green.inverse('Note: ' + title + ' Removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Listing Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const noteText = loadNotes().find((note) => note.title === title)
    if(!noteText) {
        console.log(chalk.red('No note found?'))
    }else{
        console.log(chalk.green.inverse.bold(noteText.title))
        console.log(noteText.body)
    }
}

//helper functions
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =  dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
