const express = require('express');
const morgan = require('morgan');
const {notFound, errorHandler} = require('./helpers');
const auth = require('./auth');
const notes = require('./api/notes');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const { checkTokenSetUser, IsLoogedIn } = require('./auth/middleware');

// init app
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true})); //Parse URL-encoded bodies
app.use(cors({
    origini: 'http://localhost:3000'
}));
app.use(express.json()); //Used to parse JSON bodies
app.use(checkTokenSetUser);

// routes
app.get('/', (req, res) => {
    const { user } = req;
    res.json({
        message: 'Hellow World!',
        user
    });
});


app.use('/auth', auth);
app.use('/api/v1/notes', IsLoogedIn, notes);

app.use(notFound);
app.use(errorHandler);

// connect to mongodb
// connect mongoose to database
//const db = 'mongodb+srv://ELBEQQAL:fuck0675058801@cluster0-m7kbe.mongodb.net/shoppin-list?retryWrites=true&w=majority'
const db = config.get('MONGOURI');
mongoose.connect(
    db, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology:true, 
        useCreateIndex: true
    },  
    () => {
    console.log('Mongodb is connected..')
});

// hundle database error
mongoose.connection.on('error', err => console.log('DB connection error:', err.message));


// server running on port:8080
app.listen(port, () => console.log(`Server run on port:${port}`));