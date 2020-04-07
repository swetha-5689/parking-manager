const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  spotNumber: {
    type: String,
    required: true
  },
  floorNumber: {
    type: String,
    required: true
  },
  isVacant: {
    type: Boolean,
    required: true
  },
  isReserved: {
    type: Boolean,
    required: true
  },
  isHandicapped: {
    type: Boolean,
    required: true
  },
  isPremium: {
    type: Boolean,
    required: true
  }
});

module.exports = Spot = mongoose.model("spot", SpotSchema);
