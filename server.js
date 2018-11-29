const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require('request')
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  request('https://www.politifact.com/api/v/2/statementlist/?speaker__name_slug=nancy-pelosi&limit=50&format=json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
  return res.send({hello: 'pong'});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);