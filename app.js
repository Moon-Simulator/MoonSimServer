var express = require('express');
var app = express();

var gm = require('gm');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// gm('/')

app.listen(3000, function () {
  console.log('Moon Simulator listening on port 3000!');
});
