const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
// const cors = require('cors');
const {notFound, errorHandler} = require('./helpers');

// init app
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(morgan('dev'));
// app.use(cors());

// routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hellow World!'
    });
});


app.use(notFound);
app.use(errorHandler);

// server running on port:8080
app.listen(port, () => console.log(`Server run on port:${port}`));