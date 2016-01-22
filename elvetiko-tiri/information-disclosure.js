// http localhost:3000
var express = require('express');

var app = express();

app.get('/', function indexGetHandler (req, res) {
  res.send('This isn\'t everything I\'ve sent.');
});

app.listen(3000);
