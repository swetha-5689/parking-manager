const express = require("express");

const router = express.Router();

const Spot = require("../../models/Spot");

router.get("/", (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.post("/", (req, res) => {
  const newSpot = new Spot({
    spotNumber: req.body.spotNumber,
    floorNumber: req.body.floorNumber,
    isVacant: Boolean(req.body.isVacant),
    isReserved: Boolean(req.body.isReserved),
    isHandicapped: Boolean(req.body.isHandicapped),
    isPremium: Boolean(req.body.isPremium)
  });

  newSpot
    .save()
    .then(spots => res.json(spots).catch(err => res.status(400).json(err)));
});

router.delete("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spots => spots.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
