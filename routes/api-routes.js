let db = require("../db/db.json");
const fs = require("fs");
const path = require('path');
const uuid = require('uuid');
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        let dbFile = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
        let dbFileJSON = JSON.parse(dbFile);
        return res.json(dbFileJSON);
    });
    app.get("/api/notes/:id", (req, res) => {
        res.json(db[Number(req.params.id)]);
    });
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let dbFile = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
        let dbFileJSON = JSON.parse(dbFile);
        // Assign unique ID to the newly created note
        newNote.id = uuid.v4();
        // Push new note to the db.json array of objects
        dbFileJSON.push(newNote);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(dbFileJSON), "utf8");
        return res.json(newNote);
    });
    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        db = db.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of db) {
            currentNote.id = newId.toString();
            newId++;
        }
        let dbFile = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
        res.json(db);
    }); 
};