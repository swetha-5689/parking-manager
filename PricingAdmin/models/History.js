
/* Charles Owen
* Database schema to store and manipulate 
* historic price model and price performance data.
*/
const mongoose = require('mongoose');
const HistorySchema = mongoose.Schema;

//Our history schema
const historySchema = new HistorySchema({
    model_name: {
        type: String,
        required: true,
        //unique: true
    },
    base_rate: {
        type: Number,
        default: 0
    },
    min_thresh: {
        type: Number,
        default: 0
    },
    max_thresh: {
        type:Number,
        default: 0
    },
    base_rate_mult: {
        type: Number,
        default: 0
    },
    occupancy_percent: {
        type: [String],
    },
    total_spots: {
        type: Number,
        defailt: 0
    },
    actual_occupancy_percent: {
        type: [String],
    },
    date: {
        type: Date,
    }
});

module.exports = hisSchema = mongoose.model('history', historySchema)