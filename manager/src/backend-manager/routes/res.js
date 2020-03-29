//routes?
const express = require("express");
const router = express.Router();
var cors = require('cors');
const Res = require("../models/ResModel");
var newReservation = Res({
  custFName: "Swetha",
  custLName: "Angara",
  type: "Confirmed",
  car: "E85QNY",
  email: "swetha@example.com",
  username: "s_angara",
  resID: 129247,
  Paid: true,
  startTime: "March 27, 2020 8:00 AM EST",
  endTime: "March 27, 2020 12:00 PM EST",
  reserveTime: "March 27, 2020 12:00 PM EST"
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
  startTime: "March 28, 2020 9:00 AM EST",
  endTime: "March 28, 2020 12:00 PM EST",
  reserveTime: "March 28, 2020 12:00 PM EST"
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
  startTime: "March 18, 2020 9:00 AM EST",
  endTime: "March 18, 2020 12:00 PM EST",
  reserveTime: "March 18, 2020 12:00 PM EST"
});
router.use(cors());
router.post("/", (req, response) => {
  newReservation3
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
