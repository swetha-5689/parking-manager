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
  Account.findById(req.body.email)
    .then(account => res.json(account))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Account.findByIdAndDelete(req.body.id)
    .then(() => res.json("Account deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
