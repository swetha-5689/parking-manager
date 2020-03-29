/*Charles Owen
* API for saving and manipulating test price models
*/
const express = require('express');
const router = express.Router();

//LivePriceModel
const TestPriceModel = require('../../models/TestPriceModel');

//@route GET apli/priceapi
//@desc Gets our live model details
//@access Public
router.get('/', (req, res) => {
    //finds our model by name, probably provide a drop down menu in the front end
    TestPriceModel.find({model_name: req.body.model_name})
                  .then(pricemodel => res.json(pricemodel));

});

//@route POST api/priceapi
//@desc If opertaion is makenew, adds new price model data to database
//      If operaton is update, updates all relevent data in model with
//      provided name
//@access Public
router.post('/', (req, res) => {

   //If make new model request is sent
    if(req.body.operation == "makenew"){
    const newModel = new TestPriceModel({
        model_name: req.body.model_name,
        occupancy_percent: req.body.occupancy_percent,
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate_mult,
        total_spots: req.body.total_spots
    });
    newModel.save().then(item => res.json(item));
    }
    
   //If an update request is sent
   if(req.body.operation == "update"){
   TestPriceModel.updateOne({model_name: req.body.model_name}, {
        occupancy_percent: req.body.occupancy_percent,
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate_mult,
        total_spots: req.body.total_spots
    }).then(live => res.json(live))
    }

});

//@route DELETE api/
    router.delete('/', (req, res) => {

        TestPriceModel.remove({model_name: req.body.model_name})
                      .then(item => res.json(item));

    })    

module.exports = router;