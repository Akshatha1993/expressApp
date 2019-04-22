var mysql      = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : '123456',
    port : 3306, //port mysql
    database:'moviedb',
    connectionLimit: 10,
    supportBigNumbers: true
});

var service = {};
service.getAdminCustomers = function(callback){
  var sql = "SELECT * FROM admin";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback([{}]); return; }
    // make the query
    connection.query(
      sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback([{}]); return; }
      callback(results);
    });
  });
  //return result; //line 24 execute before db reply
};

service.addAdminCustomer = function(adminCustomer,callback) {
        pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback("fail"); return; }
        connection.query("INSERT INTO admin set ? ",adminCustomer, function(err, results) {
          if(err){
           console.log("Error Selecting : %s ",err );
           callback("fail");
          }else{
           callback("success");
         }
      });
    });
};

service.updateAdminCustomer = function(adminCustomer,callback){
         pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback("fail"); return; }
        connection.query("UPDATE admin set ? WHERE id = ? ",[adminCustomer,adminCustomer.id], function(err, results) {
          if(err){
           console.log("Error Selecting : %s ",err );
           callback("fail");
          }else{
           callback("success");
         }
      });
    });
};

module.exports = service;