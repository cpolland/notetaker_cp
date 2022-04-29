const express = require("express").Router();
const { notStrictEqual } = require("assert");
const fs = require("fs")
let db = require("../db/db.json")


express.get("/notes",(req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'))
    res.json(db)
})

express.post('/notes',(req, res) => {
    let noteModel = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()* 5000)
    }
    db.push(noteModel)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
}) 
express.delete('/notes/:id',(req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (req.params.id).toString();

    notes = notes.filter(selected => {
        return selected.id != noteId;
    })

    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
    
}) 

module.exports = express