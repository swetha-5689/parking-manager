const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
  {
    username: { type: String, required: true },
    lengthreserve: { type: Number, required: true },
    date: { type: Date, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
