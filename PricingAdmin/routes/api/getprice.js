const express = require('express');
const router = express.Router();
const PriceModelClass = require('../../services/PriceModelClass.js');

//Object with connection to the Live Price Model for calculations
const LivePriceModel = require('../../models/LivePriceModel');

//@route GET api/getprice
//@desc Generates a price using the live price model data
//      Must receive two 24 hour times. One start time and one end time
//@access Public

router.get('/', (req, res) => {

    LivePriceModel.find({model_name: "Live Model"})
                  .then(pricemodel => {
                    let model_name = pricemodel[0].model_name;
                    let base_rate = pricemodel[0].base_rate;
                    let min_thresh = pricemodel[0].min_thresh;
                    let max_thresh = pricemodel[0].max_thresh;
                    let base_rate_mult = pricemodel[0].base_rate_mult;
                    let occupancy_precent = pricemodel[0].occupancy_percent;
                    //this.hours_to_park = hours_to_park;
                    let total_spots = pricemodel[0].total_spots;
                    //Create a new PriceModel Class object, this is where we use all the 
                    //price model data retreived from mongoDb
                    let myModel = new PriceModelClass(model_name, base_rate, min_thresh, max_thresh, base_rate_mult, occupancy_precent, total_spots);
                    //Calculate hourlyRates array required for the customer price function
                    let hourlyRates = myModel.calculateHourlyRateArray();
                    let customerPrice = myModel.customerPrice(req.body.start, req.body.end, hourlyRates);
                    return customerPrice;
                    }).then(pricemodel => res.json(pricemodel));

});

module.exports = router;