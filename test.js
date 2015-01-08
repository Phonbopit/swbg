var swbg = require('./');
var http = require('http');

http.createServer(function(req, res) {
	res.write(swbg());
	res.end();
}).listen(5000, '127.0.0.1');


console.log(swbg());

// Generate RGBA 
console.log(swbg.color());

// Generate Material
console.log(swbg.material());