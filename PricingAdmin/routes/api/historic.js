/* Charles Owen
* API for finding and returning historic price model data
*/
const express = require('express');
const router = express.Router();
const PriceModelClass = require('../../services/PriceModelClass.js');

//create a historic model and daily revenue object
const History = require('../../models/History');

//@route GET api/historic
//@desc Get all History items
//@access public

router.post(('/'), (req, res) =>{
    console.log(req.body.date);
    History.find({date: new Date(req.body.date)}).then(pricemodel => {
        //Retrieve the setup values from the database
        let model_name = pricemodel[0].model_name;
        let base_rate = pricemodel[0].base_rate;
        let min_thresh = pricemodel[0].min_thresh;
        let max_thresh = pricemodel[0].max_thresh;
        let base_rate_mult = pricemodel[0].base_rate_mult;
        let occupancy_precent = pricemodel[0].occupancy_percent;
        let actual_occupancy_percent = pricemodel[0].actual_occupancy_percent;
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
        //Calculate the daily revenue with dynamic rates
        let revenueArrayActual = myModel.calculateDailyRevenue(hourlyRates, actual_occupancy_percent);
        let totalActualRevenue = myModel.calculateTotalDailyRevenue(revenueArrayActual);
        //Place both arrays in a JSON friendly object
        console.log('ping');
        let returnAllData = {live_revenue: revenueArray, 
            actual_revenue: revenueArrayActual, base_rate: base_rate, 
            base_rate_mult: base_rate_mult, min_thresh: min_thresh, max_thresh: max_thresh,
            total_proj_rev: totalProjRevenue, occupancy_percent: occupancy_precent, 
            actual_occupancy_percent: actual_occupancy_percent,
            actual_revenue_total: totalActualRevenue, model_name: model_name};
            console.log(new Date(req.body.date));
        res.json([returnAllData]);
    })
});


/*
router.post(('/'), (req, res) => {

    const newHistory = new History({
        model_name: req.body.model_name,
        occupancy_percent: req.body.occupancy_percent,
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate_mult,
        total_spots: req.body.total_spots,
        actual_occupancy_percent: req.body.actual_occupancy_percent,
        date: req.body.date
    })
    newHistory.save().then(item => res.json(item));

});
*/

module.exports = router;