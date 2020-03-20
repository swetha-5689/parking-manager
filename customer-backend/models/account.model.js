const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  username: { type: String, required: true, unique: true, minlength: 3 },
  password: { type: String, required: true, trim: true, minlength: 3 },
  cardNumber: { type: Number, trim: true, minlength: 15 },
  expDate: { type: Number, trim: true, minlength: 4 },
  cvc: { type: Number, trim: true, minlength: 3 },
  cardType: { type: String, trim: true }
});

const customerInfo = mongoose.model("customerInfo", accountSchema);

module.exports = customerInfo;
