var swbg = require('./');
var http = require('http');

http.createServer(function(req, res) {
	res.write(swbg());
	res.end();
}).listen(5000, '127.0.0.1');

// HTML with random color
console.log(swbg.color());

// Generate RGBA 
console.log(swbg.genColor());

// Generate Material
console.log(swbg.genMaterial());