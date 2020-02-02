const express = require('express');

const router = express.Router();

const { listAllUsers, updateUser } = require('../../../controller/api/users');
const validateUser = require('./users.middlewares');

// Route to list all users
// GET /api/v1/users
router.get('/', listAllUsers);

// Route to update the user
// PUT /api/v1/users/:id
router.put('/:id', validateUser, updateUser);


module.exports = router;
