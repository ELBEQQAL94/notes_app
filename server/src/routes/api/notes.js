const express = require('express');

const router = express.Router();
const { getNotes, createNote } = require('../../controller/api/notes');


// GET all notes
router.get('/', getNotes);

// POST Note
router.post('/', createNote);


module.exports = router;
