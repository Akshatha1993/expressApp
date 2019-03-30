var express = require('express');
var router = express.Router();
var movieservice = require('../services/movieservice');

var movieList = [
    {id:1, name:'Kurukshethra', year:2019,image_url:'https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg', production_house:'Vajra house', rating:10, type:'ethic', language:'Kannada', date:'2019-10-10' }
]

router.get('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    movieservice.getMovies(callback);
  });
  
  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movie = req.body;
    movieservice.addMovie(movie, callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    movieservice.deleteMovie(movieId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(movie){
      res.send(movie);
    }
    var movieId = req.params.id;
    var movie = movieservice.getMovieById(movieId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    var movie = req.body;
    dbService.updateMovie(movie,callback);
  });

module.exports = router;
