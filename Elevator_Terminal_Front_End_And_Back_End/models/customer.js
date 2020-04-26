const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  licensePlate: {
    type: String,
    required: false,
  },
  resID: {
    type: String,
    required: true,
  },
  spotNum: {
    type: String,
    required: true,
  },
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
