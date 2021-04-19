// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const db = require("../db/db.json");
const fs = require("fs");
const path = require('path');

// ROUTING

module.exports = (app) => {
    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    app.get("/api/notes", (req, res) => {
        // Read the db.json file and return all saved notes as JSON
        //Reads the json file async
        let dbFile = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
        //Parsing the file is necesary to displayed it like a JSON object array
        let dbFileJSON = JSON.parse(dbFile);
        //Return the json db file to the user
        return res.json(dbFileJSON);

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/notes", (req, res) => {

        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        // Add unique id to each note
        let newNote = req.body;

        //Reads the JSON file asynchronous
        let dbFile = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");

        //Turn object into JSON format to work it out 
        let dbFileJSON = JSON.parse(dbFile);

        //Call function to generate new ID
        //newNote.id = generatesId(dbFileJSON);
        //newNote.id = uuid.v4();

        //pushs the new note to the notes array
        dbFileJSON.push(newNote);

        //Overrides the jsondb file with the new note pushed
        //Stringify the JSON array is necesary to write the file with the JSON like object string representation, otherwise we might write a bunch of [Object][Object]
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(dbFileJSON), "utf8");

        //returns the new note added to the user
        return res.json(newNote);

    });


};