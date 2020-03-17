const mongoose = require('mongoose');
const TestPriceSchema = mongoose.Schema;

//Create Schema
const TestPriceModelSchema = new TestPriceSchema({
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
    operation: {
        type: String
    }
});

module.exports = PriceModel = mongoose.model('test_price_model', TestPriceModelSchema)