const express = require("express");
const router = express.Router();
const { listAllUsers, updateUser } = require('../../controller/api/users');

// Route to list all users
// GET /api/v1/users
router.get('/', listAllUsers);

// Route to update the user
// PUT /api/v1/users/:id
router.put('/:id', updateUser);


module.exports = router;
