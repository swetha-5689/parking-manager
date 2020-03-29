const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billingSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  currentDues: { type: Number, required: true },
  dateofDues: { type: Date, required: true },
  description: { type: String, required: true },
  previousDues: { type: Number, required: false }
});

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
