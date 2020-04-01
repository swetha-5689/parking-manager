/* Charles Owen
* API for caculating daily revenue, projected dynamic and base.
*/
const express = require('express');
const router = express.Router();
const PriceModelClass = require('../../services/PriceModelClass.js');

//Object with connection to the Live Price Model for calculations
const LivePriceModel = require('../../models/LivePriceModel');

//@route Get api/liverevenue
//@desc Generates a first array containing the hourly
//      revenue based on the dynamic price
//      Generates a second array containing the hourly
//      revenue based on the static price
//      Send both arrays to the caller in JSON format
//      "live_revenue" : "arr"
//      "static_revenue": "arr"

router.get('/', (req, res) => {

    LivePriceModel.find({model_name: "Live Model"})
                  .then(pricemodel => {
                    //Retrieve the setup values from the database
                    let model_name = pricemodel[0].model_name;
                    let base_rate = pricemodel[0].base_rate;
                    let min_thresh = pricemodel[0].min_thresh;
                    let max_thresh = pricemodel[0].max_thresh;
                    let base_rate_mult = pricemodel[0].base_rate_mult;
                    let occupancy_precent = pricemodel[0].occupancy_percent;
                    //this.hours_to_park = hours_to_park; Not needed
                    let total_spots = pricemodel[0].total_spots;
                    //Create a new PriceModel Class object, this is where we use all the 
                    //price model data retreived from mongoDb
                    let myModel = new PriceModelClass(model_name, base_rate, min_thresh, max_thresh, base_rate_mult, occupancy_precent, total_spots);
                    //Calculate hourlRates array required for the customer price function
                    let hourlyRates = myModel.calculateHourlyRateArray();
                    //Calculate the daily revenue with dynamic rates
                    let revenueArray = myModel.calculateDailyRevenue(hourlyRates, occupancy_precent);
                    //Get the total projected revenue
                    let totalProjRevenue = myModel.calculateTotalDailyRevenue(revenueArray);
                    console.log(totalProjRevenue);
                    //Get the hourly rates based on the current base_rate       
                    let hourlyRatesStatic = myModel.calculateHourlyRateArrayStatic();
                    //Calculate the daily revenue with dynamic rates
                    let revenueArrayStatic = myModel.calculateDailyRevenue(hourlyRatesStatic, occupancy_precent);
                    //Place both arrays in a JSON friendly object
                    console.log('ping');
                    let returnAllData = {live_revenue: revenueArray, 
                        static_revenue: revenueArrayStatic, base_rate: base_rate, 
                        base_rate_mult: base_rate_mult, min_thresh: min_thresh, max_thresh: max_thresh,
                        total_proj_rev: totalProjRevenue};
                    res.json([returnAllData]);
                });
});

module.exports = router;