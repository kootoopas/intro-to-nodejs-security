// http :3000
var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.use(helmet.hidePoweredBy({
  setTo: 'PHP 5.4.45' // ;)
}));

app.get('/', function indexGetHandler (req, res) {
  res.send('This isn\'t everything I\'ve sent.');
});

app.listen(3000);
