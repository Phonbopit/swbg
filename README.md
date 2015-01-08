Swap BG
===

Background Color Generator, random background color on every refresh page.


## Usage

```javascript
var swbg = require('swbg');

// print html code
console.log(swbg());

// print RBGA color
console.log(swbg.color());
```

## Example

Pure Node.js

```javascript
var http = require('http');
var swbg = require('swap-bg');

http.createServer(function(req, res) {
	res.write(swbg());
	res.end();
}).listen(5000, '127.0.0.1');

console.log("swap-bg is awesome :)");
```

With Express

```javascript
var express = require('express');
var app = express();
var swbg = require('swap-bg');

app.get('/', function(req, res) {
	res.send(swbg());
});

app.listen(5000, function() {
	console.log("swap-bg is awesome :)");
})
```