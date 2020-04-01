const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var EventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
},
    { collection: 'Events' }
);
const eventsModel = mongoose.model('Events', EventsSchema);
module.exports = eventsModel;