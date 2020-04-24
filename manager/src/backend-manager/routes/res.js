const express = require("express");
const router = express.Router();
var cors = require('cors');
const Res = require("../models/ResModel");
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(cors());

router.post("/", (req, response) => {
  var name = req.body.queryResult.parameters.name.name;
  var name = name.split(" ");
  console.log(name[0]);
  var d1 = new Date(req.body.queryResult.parameters.date);
  var d2 = new Date(req.body.queryResult.parameters.timePeriod.startTime);
  var d3 = new Date(req.body.queryResult.parameters.timePeriod.endTime);
  d2.setDate(d1.getDate());
  d3.setDate(d1.getDate());
  const min = 100000;
  const max = 1000000;
  var rand = min + Math.random() * (max - min);
  var resID1 = Math.floor(rand);
  const newRes = Res({
    custFName: name[0],
    custLName: name[1],
    type: "Confirmed",
    car: req.body.queryResult.parameters.licensePlate,
    email: req.body.queryResult.parameters.email,
    resID: resID1,
    Paid: false,
    startTime: d2,
    reserveTime: d3
  });
  newRes
    .save()
    .then(res => response.json(res).catch(err => response.status(400).json(err)));
});
router.get("/", (req, response) => {
  Res.find({}, function(err, reservation) {
    if (err) {
      response.status(404).send(err);
    } else if (reservation.length == 0) {
      response.send("sorry u still suck");
    } else {
      console.log("hello");
      var d = new Date(2020, 2, 17, 10, 00);
      console.log(d);
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
