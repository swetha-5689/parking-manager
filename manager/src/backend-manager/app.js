var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var reserveRouter = require('./routes/res.js');
var statsRouter = require('./routes/stats.js');
var floorRouter = require('./routes/floors.js');
var spotsRouter = require('./routes/spots.js');
var app = express();

var cors = require('cors');
// view engine setups
app.use(cors());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/res', reserveRouter);
app.use('/api/floors', floorRouter);
app.use('/api/spots', spotsRouter);
app.use('/api/stats', statsRouter);
const mongoURI = 'mongodb+srv://swetha5689:SmartPark2020@smartpark-necgp.mongodb.net/SmartPark?retryWrites=true&w=majority';
mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
