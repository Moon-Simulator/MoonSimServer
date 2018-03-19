var express = require('express');
var app = express();

const gm = require('gm');
const fs = require('fs');

const path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/crop/:width/:height', (request, response) => {
  
  const { width, height } = request.params; // Get the width and height from the request parameters
  
  gm('./assets/moon_1024.jpg')
    .crop(width, height)
    .write('./output/tmp.png', (err) => {
      if (err) {
        console.log(err); 
      } else {
        response.sendFile(path.resolve(app.get('appPath') + '/output/tmp.png'));
      }
    })

   fs.unlinkSync(path.resolve(app.get('appPath') + '/output/tmp.png')); // Delete the temporary file that we created in the cropping task
});

app.listen(3000, function () {
  console.log('Moon Simulator listening on port 3000!');
});
