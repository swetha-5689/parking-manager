//routes?
const express = require("express");
const router = express.Router();
var cors = require('cors');
const Res = require("../models/ResModel");
var newReservation = Res({
  custFName: "Aniqa",
  custLName: "Rahim",
  type: "Confirmed",
  car: "E57LDY",
  email: "aniqa@example.com",
  username: "a_rahim",
  resID: 129387,
  Paid: true,
  startTime: "March 27, 2020 8:00 AM EST",
  endTime: "March 27, 2020 12:00 PM EST",
  reserveTime: "March 27, 2020 12:00 PM EST"
});
router.use(cors());
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
