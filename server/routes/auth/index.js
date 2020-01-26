const express = require("express");
const router = express.Router();
const { signUp, logIn } = require('../../controller/auth');


// POST /auth/signup
router.post("/signup", signUp);

// POST /auth/signup
router.post("/login", logIn);

module.exports = router;
