var net = require('net');

var server = net.createServer(function (socket) {
	// log the ip address
	console.log("Connection from " + socket.remoteAddress);
	socket.end("Hello world\n");
});

server.listen(7000, "localhost");