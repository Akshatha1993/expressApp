var express = require('express');

var app = express();

var customerList = [
{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'78787878', address:'India'},
{id:2, name:'Kamal', email:'kamal@gmail.com', phone:'9724232340', address:'Asia'}
];
var movieList = [
    {id:1, name:'Akshatha', year:'04/06/1993', image_url:'assets/logo.jpg', production_house:'fff', rating:'4', type:'UA', language:'Kannada', date:'12/12/2019'},
    {id:2, name:'Rakesh', year:'04/06/1993', image_url:'assets/logo.jpg', production_house:'fff', rating:'4', type:'UA', language:'Kannada', date:'12/12/2019'},
]

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/customer', function (req, res) {
	res.send(customerList);
});
app.get('/movies', function (req, res) {
	res.send(movieList);
});

console.log("Hello Express App");

var server = app.listen(3001, function () {
	console.log('Example app listening at 3001');
});