const router = require("express").Router();
let Account = require("../models/account.model");

router.route("/").get((req, res) => {
  Account.find()
    .then(username => res.json(username))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;

  const newAccount = new Account({
    username,
    email,
    firstname,
    lastname,
    password
  });

  newAccount
    .save()
    .then(() => res.json("Account added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:email").get((req, res) => {
  Account.findById(req.params.email)
    .then(account => res.json(account))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);

      exercise
        .save()
        .then(() => res.json("Exercise Updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
