const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send("Listening on localhost");
})

//listening
app.listen(PORT);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log("connected to db")
);