const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var FloorSchema = new Schema({ 
    number: {
        type: Number,
        required: true
    },
    maxSpots: {
        type: Number,
        required: true
    }
},
{collection : 'Floors'}
);
const FloorModel = mongoose.model('Floors', FloorSchema);
module.exports = FloorModel;