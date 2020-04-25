const express = require("express");

const router = express.Router();

const Spot = require("../../models/Spot");

var cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  Spot.find()
    .then((spots) => res.json(spots))
    .catch((err) => res.status(400).json(err));
});

router.post("/addSpot", (req, res) => {
  const newSpot = new Spot({
    spotNumber: req.body.spotNumber,
    floorNumber: req.body.floorNumber,
    resID: req.body.resID,
    isVacant: Boolean(req.body.isVacant),
    isReserved: Boolean(req.body.isReserved),
    isPremium: Boolean(req.body.isPremium),
    startTime: req.body.startTime,
  });

  newSpot
    .save()
    .then((spots) => res.json(spots).catch((err) => res.status(400).json(err)));
});

router.get("/:spotNumber", (req, res) => {
  Spot.findOne({ spotNumber: req.params.spotNumber })
    .then((spots) => res.json(spots))
    .catch((err) => res.status(400).json(err));
});

router.get("/searchResID/:resID", (req, res) => {
  Spot.findOne({ resID: req.params.resID })
    .then((spots) => res.json(spots))
    .catch((err) => res.status(400).json(err));
});

router.get("/open/:isVacant", (req, res) => {
  Spot.find({ isVacant: req.params.isVacant })
    .then((spots) => res.json(spots))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then((spots) => spots.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
