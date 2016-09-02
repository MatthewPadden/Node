// filesystem module
var fs = require('fs');

// as JavaScript is single threaded, this will block the thread node is running on
var contents = fs.readFileSync('text.txt').toString();
console.log(contents);

// this is an "async" version which chunks the file. It will read a bit and then run the callback
fs.readFile('text.txt', function (err, buff) {
	console.log(buff.toString());
});

/* callbacks are used so you don't freeze the event loop on long-running operations. This can
*  lead to massive chains of callbacks. To prevent this we use a promise style way of coding */