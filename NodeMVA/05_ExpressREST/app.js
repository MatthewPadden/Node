/*
	This example shows how to build a simple API using Express. We have 2 get routes, one on 
	the root and one under ~/irish/
*/

var express = require('express');

var app = express();

app.get('/', function(request, response) {
	response.json({
		firstName: "Matthew",
		lastName: "Padden",
		message: "Hello world! From an API built using Express!"
	});
});

app.get('/irish/', function(request, response) {
	response.json({
		firstName: "Matthew",
		lastName: "MacPadin",
		message: "Failte world! From an API built using Express!"
	});
});

app.listen(7001);