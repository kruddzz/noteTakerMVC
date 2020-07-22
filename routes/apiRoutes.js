const router = require("express").Router();
const Notes = require("../models/note");

// GET "/api/notes" responds with all notes from the database
router.get("/api/notes", (req, res) => {
  Notes.selectAll()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json(err));
});

router.post("/api/notes", (req, res) => {
  Notes.createNote([req.body.title, req.body.text])
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/api/notes/:id", (req, res) => {
  Notes.deleteNote(req.params.id)
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json(err));
});

// router.put("/api/notes/:id", (req, res) => {
//   Notes.updateNote(req.params.id)
//   .then((results) => res.json(results))
//   .catch((err) => res.status(500).json(err));
// });

module.exports = router;
