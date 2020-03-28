const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config(); // environment variables in the dotenv file

const app = express(); //create express server
const port = process.env.PORT || 5000; // port that the server will be on

app.use(cors()); // middleware
app.use(express.json()); // parse json, server will be sending and receiveing json

const uri = process.env.ATLAS_URI; // from mongoDB connection string
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} // uri = where our database is stored
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const reservationRouter = require('./routes/reservations');
app.use('/reservations', reservationRouter);

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
}); // starting server
