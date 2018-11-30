const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require('request')
const app = express();

const DIST_DIR = path.join(__dirname, 'build')

app.use(express.static(DIST_DIR));

app.get('/ping', (req, res) => {
  request('https://www.politifact.com/api/v/2/statementlist/?speaker__name_slug=nancy-pelosi&limit=50&format=json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
  return res.send({hello: 'pong'});
});

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(process.env.PORT || 8080);