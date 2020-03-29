/*Charles Owen
* API for retrieving a price given two input times
*/
const express = require('express');
const router = express.Router();

//LivePriceModel
const LivePriceModel = require('../../models/LivePriceModel');

//@route GET api/priceapi
//@desc Gets our live model
//@access Public
router.get('/', (req, res) => {
    //finds our model by name, probably provide a drop down menu later though
    LivePriceModel.find({model_name: "Live Model"})
                  .then(pricemodel => res.json(pricemodel));

});


//@route POST api/priceapi
//@desc Updates our live model
//@access Public
router.post('/', (req, res) => {
   //Code to populate first live model
    /*
    const newModel = new LivePriceModel({
        model_name: req.body.model_name,
        occupancy_percent: req.body.occupancy_percent,
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate,
        total_spots: req.body.total_spots
    });
    newModel.save().then(item => res.json(item));
    });
    */
   //For updating from the quick update screen
   if(req.body.occupancy_percent != null && req.body.total_spots != null){
    LivePriceModel.updateOne({model_name: "Live Model"}, {   
        occupancy_percent: req.body.occupancy_percent,
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate_mult,
        total_spots: req.body.total_spots
    }).then(live => res.json(live))
    }
    else{
    LivePriceModel.updateOne({model_name: "Live Model"}, {   
        base_rate: req.body.base_rate,
        min_thresh: req.body.min_thresh,
        max_thresh: req.body.max_thresh,
        base_rate_mult: req.body.base_rate_mult
    }).then(live => res.json(live))
        }  
});
    



module.exports = router;