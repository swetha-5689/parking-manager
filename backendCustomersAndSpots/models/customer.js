const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  membershipNumber: {
    type: Number,
    required: true
  }
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
