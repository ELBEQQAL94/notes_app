const app = require('./app');

const port = process.env.PORT || 8080;


// server running on port:8080
app.listen(port, () => console.log(`Server run on port:${port}`));
