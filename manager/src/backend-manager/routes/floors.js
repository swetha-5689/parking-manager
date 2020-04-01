const express = require("express");
const router = express.Router();
var cors = require('cors');
router.use(cors());
const Floor = require("../models/FloorModel.js");
router.get("/", (req, response) => {
    Floor.find({}, function(err, floor) {
      if (err) {
        response.status(404).send(err);
      } else if (floor.length == 0) {
        response.send("sorry u still suck");
      } else {
        console.log("hello");
        response.json(floor);
      }
    });
  });
  module.exports = router;