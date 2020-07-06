const fs = require('fs');

const getNotes = function () {
    return 'Accessing notes...';
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicates = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note added.');
    } else {
        console.log('Note title already in use.');
    }

};

const removeNote = function (title) {
    const notes = loadNotes();
    const toKeep = notes.filter(function (note) {
        return note.title != title;
    });
    saveNotes(toKeep);
};

const loadNotes = function () {
    try {
        const buffer = fs.readFileSync('notes.json');
        const data = buffer.toString();
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
};

const saveNotes = function (notes) {
    try {
        const data = JSON.stringify(notes);
        fs.writeFileSync('notes.json', data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};