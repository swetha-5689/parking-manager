const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var ReservationSchema = new Schema({ 
    custFName: {
        type: String,
        required: true
    },
    custLName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    car: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date,
        default: Date.now
    },
    reserveTime: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    Paid: {
        type: Boolean,
        required: true
    },
    resID: {
        type: Number,
        required: true
    }
});
ReservationSchema.set('collection', 'Reservations');
module.exports = mongoose.model('Reservations', ReservationSchema);