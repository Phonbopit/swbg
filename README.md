Swap BG
===

Background Color Generator, random background color on every refresh page.

## Installation

```
npm install --save swbg
```

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

## LICENSE

	The MIT License (MIT)

	Copyright (c) 2015 Chai Phonbopit

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.


