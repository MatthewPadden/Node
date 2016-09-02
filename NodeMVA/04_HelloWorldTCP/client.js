var net = require('net');

// create a new socket
var client = new net.Socket();

// connect to localhost on port 7000
client.connect(7000, "localhost");

// whenever we get a data event
client.on('data', function(data) {
	console.log('Data: ' + data);
	client.destroy();
});

// close the connection
client.on('close', function() {
	console.log('Connection closed');
});