//routes?
const express = require("express");
const router = express.Router();
const Res = require("../models/ResModel");

router.get("/", (req, response) => {
  Res.aggregate([
    {
      '$project': {
        'overstay': {
          '$toInt': {
            '$gt': [
              '$endTime', '$reserveTime'
            ]
          }
        }, 
        'understay': {
          '$toInt': {
            '$gt': [
              '$reserveTime', '$endTime'
            ]
          }
        }, 
        'confirmed': {
          '$toInt': {
            '$eq': [
              '$type', 'Confirmed'
            ]
          }
        }, 
        'walkin': {
          '$toInt': {
            '$eq': [
              '$type', 'Walk-in'
            ]
          }
        }, 
        'noShow': {
          '$toInt': {
            '$eq': [
              '$type', 'No-Show'
            ]
          }
        }
      }
    }, {
      '$match': {
        '$or': [
          {
            'overstay': 1
          }, {
            'understay': 1
          }, {
            'confirmed': 1
          }, {
            'walkin': 1
          }, {
            'noShow': 1
          }
        ]
      }
    }, {
      '$group': {
        '_id': null, 
        'OverstayCount': {
          '$sum': '$overstay'
        }, 
        'UnderstayCount': {
          '$sum': '$understay'
        }, 
        'ConfirmedCount': {
          '$sum': '$confirmed'
        }, 
        'WalkinCount': {
          '$sum': '$walkin'
        }, 
        'AvailCount': {
          '$sum': 2
        }, 
        'OccupancyCount': {
          '$sum': 4
        }, 
        'noShowCount': {
          '$sum': '$noShow'
        }
      }
    }
  ],
  function(err, reservations) {
    if(err) console.log("error");
    else {
      response.send(reservations);
    }
  }) 
});
module.exports = router;
