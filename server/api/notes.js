const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(200)
      .required(),
    description: Joi.string()
      .trim()
      .required()
  });

router.get('/', (req, res, next) => {

    Note.find({user_id: req.user._id})
    .then(notes => {
      if(notes.length > 0) {
        res.status(200).json(notes);
      } else {
        res.status(200).json({
          message: "Notes Note Found."
        });
      }
    }).catch(err => {
      const error = new Error(err);
      res.status(422);
      next(error);
    });
});

router.post('/', (req, res, next) =>{ 

    const result = Joi.validate(req.body, schema);

    if (result.error === null) {

        const note = {
            ...req.body,
            user_id: req.user._id,
            username: req.user.username,
        };

        // create new note
        const newNote = new Note(note);

        // insert note to db
        newNote.save();

        res.status(200).json({
          message: "Note is created!",
          note: newNote
        });


    } else {
        const error = new Error(result.error.details[0].message);
        res.status(422);
        next(error);
    };
});

module.exports = router;