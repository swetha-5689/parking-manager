//routes?
const express = require('express');
const res = express.Router();

//Item Model
const Res = require('../models/ResModel.js');

// @route GET api/items
// @desc Get All Items
// @access Public

res.get('/', (req, response) => {
    Res.find({}, function(err, reservation) {
        if (err) {
          response.status(404).send(err);
        } else {
          response.json(reservation);
        }
      })
});

module.exports = res;