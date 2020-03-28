const router = require("express").Router();
let Bill = require("../models/billing.model");
let User = require("../models/account.model");

router.get("/", function(req, res) {
  Bill.find()
    .then(currentDues => res.json(currentDues))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const currentDues = req.body.currentDues;
  const dateofDues = req.body.dateofDues;

  const newBill = new Bill({
    username,
    email,
    currentDues,
    dateofDues
  });

  newBill
    .save()
    .then(() => res.json("Dues added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.delete("/user", function(req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;
