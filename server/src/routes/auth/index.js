const express = require('express');

const router = express.Router();
const {
  signUp,
  logIn,
  getAuth,
} = require('../../controller/auth');

const { validateUser } = require('./auth.middlewares');

// any route in here is pre-pended with /auth
router.get('/', getAuth);

// POST /auth/signup
router.post('/signup', validateUser, signUp);

// POST /auth/signup
router.post('/login', validateUser, logIn);

module.exports = router;
