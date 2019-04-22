var express = require('express');
var router = express.Router();
var adminCustService = require('../services/adminCustService');

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  adminCustService.getAdminCustomers(callback);
});

router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var adminCustomer = req.body;
  adminCustService.addAdminCustomer(adminCustomer, callback);
});

// router.delete('/:id', function(req, res, next) {
//   var callback = function(result){
//     res.send({'result':result});
//   }
//   var customerId = req.params.id;
//   dbService.deleteCustomer(customerId,callback);
// });

// router.get('/:id', function(req, res, next) {
//   var callback = function(customer){
//     res.send(customer);
//   }
//   var customerId = req.params.id;
//   var customer = dbService.getCustomerById(customerId,callback);
// });

router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var admincustomerId = req.params.id;
  var adminCustomer = req.body;
  adminCustService.updateAdminCustomer(adminCustomer,callback);
});
module.exports = router;
