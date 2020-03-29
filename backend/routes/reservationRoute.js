const router = require("express").Router(); // required router
let Reservation = require("../models/reservations.model");

router.route("/").get((req, res) => {
  //get request
  Reservation.find() //mongoose command
    .then(reservations => res.json(reservations)) // if successful then return in json format
    .catch(err => res.status(400).json("Error: " + err)); //if unsuccessful then return error
});

router.route("/add").post((req, res) => {
  //post request
  const username = req.body.username; // variables in reservation / required to make a reservation
  const lengthreserve = Number(req.body.lengthreserve);
  const date = Date.parse(req.body.date);
  const startTime = Number(req.body.startTime); // converting to Number data type
  const endTime = Number(req.body.endTime); // parsing to Date data type

  const newReservation = new Reservation({
    username,
    lengthreserve,
    date,
    startTime,
    endTime
  });

  newReservation
    .save()
    .then(() => res.json("Reservation added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

//SHE WORKS LETS GOOOO FULL SEND
