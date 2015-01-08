var generateColor = function() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var a = Math.random().toFixed(2);
	var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	return rgba;
}

module.exports = function() {

	var rgba = generateColor();

	var html = 	'<!DOCTYPE html><html><head>' +
			'<title>Background Color Generator</title></head>' +
			'<body><script type="text/javascript">' + 
			'document.body.style.backgroundColor = "' + rgba + '"' +
			'</script></body></html>';

	return html;
}

module.exports.color = generateColor;
