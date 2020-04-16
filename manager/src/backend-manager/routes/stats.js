//routes?
const express = require("express");
const router = express.Router();
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const Res = require("../models/ResModel");

router.get("/", (req, response) => {
  Res.aggregate([{
    '$project': {
      'overstay': {
        '$gt': [
          '$endTime', '$reserveTime'
        ]
      }
    }
  }, {
    '$match': {
      'overstay': true
    }
  }, {
    '$count': 'overstay'
  }],
  function(err, reservations) {
    if(err) console.log("error");
    else {
      response.send(reservations);
    }
  }) 
});
module.exports = router;
