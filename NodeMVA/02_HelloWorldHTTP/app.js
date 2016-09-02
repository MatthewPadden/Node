var http = require('http');

// create a http server with a requestListener function
var server = http.createServer(function (request, response) {
	// sends a response header to the request including response header
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	// finishes sending the response. We specified data which is effectivly the same as response.write() followed by request.end()
	response.end("Hello world!\n");
});

// begin accepting connections on port 7000
server.listen(7000);