//routes?
const express = require("express");
const router = express.Router();
var cors = require('cors');
const Res = require("../models/ResModel");
var newReservation = Res({
  custFName: "Aniqa",
  custLName: "Rahim",
  type: "Confirmed",
  car: "E43RET",
  email: "aniqa@example.com",
  username: "a_rahim",
  resID: 129229,
  Paid: true,
  startTime: Date("March 31, 2020 9:00 AM EST"),
  endTime: Date("March 31, 2020 12:00 PM EST"),
  reserveTime: Date("March 31, 2020 12:00 PM EST")
});
var newReservation2 = Res({
  custFName: "Jeffrey",
  custLName: "Samson",
  type: "Confirmed",
  car: "E85DBY",
  email: "jeffrey@example.com",
  username: "j_samson",
  resID: 129242,
  Paid: false,
  startTime: Date("March 28, 2020 9:00 AM EST"),
  endTime: Date("March 28, 2020 12:00 PM EST"),
  reserveTime: Date("March 28, 2020 12:00 PM EST")
});
var newReservation3 = Res({
  custFName: "Neha",
  custLName: "Nelson",
  type: "Guaranteed",
  car: "E82RTY",
  email: "neha@example.com",
  username: "n_nelson",
  resID: 129652,
  Paid: false,
  startTime: Date("March 18, 2020 9:00 AM EST"),
  endTime: Date("March 18, 2020 12:00 PM EST"),
  reserveTime: Date("March 18, 2020 12:00 PM EST")
});
router.use(cors());
router.post("/", (req, response) => {
  newReservation2
    .save(function(error){
        if(error) console.log();
        else response.send(newReservation2);
    });
    response.end();
});
router.get("/", (req, response) => {
  Res.find({}, function(err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else if (reservation.length == 0) {
      response.send("sorry u still suck");
    } else {
      console.log("hello");
      response.json(reservation);
    }
  });
});
/* DELETE Reservation */
router.route('/:id').delete((req, res, next) => {
  Res.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;
