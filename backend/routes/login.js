const router = require("express").Router();
let Account = require("../models/account.model");

router.route("/find").get((req, res) => {
  Account.findById()
    .then(account => res.json(account))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
