const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  spotNumber: {
    type: String,
    required: true,
  },
  floorNumber: {
    type: String,
    required: true,
  },
  resID: {
    type: String,
    required: false,
  },
  isVacant: {
    type: Boolean,
    required: true,
  },
  isReserved: {
    type: Boolean,
    required: true,
  },
  isPremium: {
    type: Boolean,
    required: true,
  },
  startTime: {
    type: String,
    default: 0,
  },
});

module.exports = Spot = mongoose.model("spot", SpotSchema);
