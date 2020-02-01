const findNotes = require('./helpers');

// GET All NOTES
// GET http://localhost:8080/api/v1/notes
// --------------------------------------
exports.getNotes = (req, res, next) => {
  const data = { user_id: req.user._id };
  findNotes(data, res, next);  
};

// Create NOTE
// POST Request To http://localhost:8080/api/v1/notes
// -------------------------------------------------
exports.createNote = (req, res, next) => {
  const note = {
    ...req.body,
    user_id: req.user._id,
    username: req.user.username
  };

  // create new note
  const newNote = new Note(note);

  // insert note to db
  newNote.save();

  res.status(200).json({
    message: "Note is created!",
    note: newNote
  });
};
