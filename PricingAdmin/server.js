
/* Charles Owen
* The primary server page for the admin's pricing module.
* Delcaration of all api routes and database schema.
*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const TestClass = require('./services/test.js');
const items = require('./routes/api/items.js');
const livepricemodel = require('./routes/api/priceapi.js');
const testprice = require('./routes/api/testpriceapi.js')
const getprice = require('./routes/api/getprice.js');
const liverevenue = require('./routes/api/liverevenue');
const historic = require('./routes/api/historic');
//const PriceModelClass = require('./services/PriceModelClass.js');
//const PriceModelSchema = require('./models/LivePriceModel');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

/* API routes */
app.use('/api/items', items);
app.use('/api/liveprice', livepricemodel);
app.use('/api/testprice', testprice);
app.use('/api/getprice', getprice);
app.use('/api/liverevenue', liverevenue);
app.use('/api/historic', historic);

/* Decl of server port */
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

/* Old code used for testing purposes moved below this line.
*  Don't delete in the event it is needed for reference.
*  Remove before final release
*/

//Database Test
//var LivePriceTest = mongoose.model('Live', PriceModelSchema);

//PriceModelSchema.model_name = "hi";
//PriceModelSchema.occupancy_percent = [1, 2, 3];

//console.log(PriceModelSchema.occupancy_percent);

//My class testing... Ugh
/*
let occupancyPercent = [
        20, 20, 18, 0, 45, 80, 90, 75, 72, 78, 72, 75, 
        85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20
    ];
*/
//let constructorTestArgs = ["mod1", 6, 60, 90, 1.4, occupancyPercent, 4, 100];
//let newPriceModel = new PriceModelClass(...constructorTestArgs);
//let dailyRate = newPriceModel.calculateHourlyRateArray();
// User Routes
//app.options('*', cors());
//app.use(cors);

//app.get('/hey', function(req, res) {
   //res.send(newPriceModel.calculateHourlyRateArray());
   //res.send(newPriceModel.customerPrice('00:00', '01:00', dailyRate));
   //res.send(newPriceModel.calculateDailyRevenue(dailyRate));
//})
/*
const newPriceModel = new PriceModel();
app.post('/hey', function(req, res){
    
        newPriceModel.model_name = req.body.model_name,
        newPriceModel.base_rate = req.body.base_rate
        res.json('Got' + newPriceModel.base_rate+newPriceModel.model_name);

});
*/


//console.log(newPriceModel.calculatePriceArray());