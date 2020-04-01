const express = require("express");

const router = express.Router();

const Spot = require("../models/SpotModel.js");

var cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.get("/floor/:floorNumber", (req, res) => {
  Spot.find({ floorNumber: req.params.floorNumber})
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.post("/", (req, res) => {
  const newSpot = new Spot({
    spotNumber: Number(req.body.spotNumber),
    floorNumber: Number(req.body.floorNumber),
    isVacant: Boolean(req.body.isVacant),
    isReserved: Boolean(req.body.isReserved),
    isHandicapped: Boolean(req.body.isHandicapped),
    isPremium: Boolean(req.body.isPremium)
  });

  newSpot
    .save()
    .then(spots => res.json(spots).catch(err => res.status(400).json(err)));
});

router.get("/:spotNumber", (req, res) => {
  Spot.findOne({ spotNumber: req.params.spotNumber })
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.get("/open/:isVacant", (req, res) => {
  Spot.find({ isVacant: req.params.isVacant })
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spots => spots.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
