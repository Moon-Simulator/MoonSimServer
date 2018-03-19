var express = require('express');
var app = express();

var gm = require('gm');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

gm('./assets/moon_1024.jpg')
	.crop(width, height)
	.write('./output/temp.jpg', (err) => {
		if (err) {
			console.log(err);
		}
	});

app.listen(3000, function () {
  console.log('Moon Simulator listening on port 3000!');
});
