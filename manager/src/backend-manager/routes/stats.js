//routes?
const express = require("express");
const router = express.Router();

const Res = require("../models/ResModel");
var newReservation = Res({
  custFName: "Jason",
  custLName: "Mark",
  type: "Guaranteed",
  car: "E85GRN",
  email: "jason@example.com",
  username: "JasonMar",
  resID: 34567875,
  Paid: true
});

router.post("/", (req, response) => {
  newReservation
    .save(function(error){
        if(error) console.log();
        else response.send(newReservation);
    });
});
router.get("/", (req, response) => {
  Res.find({}, function(err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else if (reservation.length == 0) {
      response.send("sorry u still suck");
    } else {
      console.log("hello");
      response.send(reservation);
    }
  });
});
module.exports = router;
