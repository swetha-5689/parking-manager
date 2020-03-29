/* Charles Owen
* Database schema to store and manipulate the 
* currently live price model.
*/
const mongoose = require('mongoose');
const LivePriceSchema = mongoose.Schema;

//Create Schema
const PriceModelSchema = new LivePriceSchema({
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
    }
});

module.exports = PriceModel = mongoose.model('price_model', PriceModelSchema)