var material = [
	"#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#ff8a80", "#ff5252", "#ff1744", "#f50000",
	"#e91e63", "#fce4ec", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162",
	"#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff",
	"#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea",
	"#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe",
	"#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#82b1ff", "#448aff", "#2979ff", "#2962ff"
];

var generateColor = function() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var a = Math.random().toFixed(2);
	var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	return rgba;
};

var generateMaterial = function() {
	return material[Math.floor(Math.random() * material.length)]
}

module.exports = function() {

	var color = generateMaterial();

	var html = 	'<!DOCTYPE html><html><head>' +
			'<title>swbg : Background Color Generator</title></head>' +
			'<body><script type="text/javascript">' + 
			'document.body.style.backgroundColor = "' + color + '"' +
			'</script></body></html>';

	return html;
};

module.exports.color = generateColor;
module.exports.material = generateMaterial;
