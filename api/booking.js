var express = require('express');
var router = express.Router();
var bookingservice = require('../services/bookingservice');

var bookingList = [
    {id:1, customer_id:1, tickets:3, 
        movie_id:2, movie_name:'yajamana', 
        movie_time:'10:10AM', 
        theatre:'Forum', screen:'HD', 
        city:'whitefield', movie_date:'10/10/12', 
        date:'10/10/12', amount:150, 
        ticket_price:120}
]

router.get('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    bookingservice.getBooking(callback);
  });


    router.post('/', function(req, res, next) {
        console.log(">> post booking");
        var callback = function(result){
          res.send({'result':result});
        }
        var booking = req.body;
        bookingservice.addBooking(booking, callback);
      });
module.exports = router;
