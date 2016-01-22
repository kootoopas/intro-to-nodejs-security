// HttpOnly flag on cookies makes them unreachable by client side js (and third party js client code that tracks users)
// http :3000
var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.get('/', function indexGetHandler (req, res) {
  res.send('This isn\'t everything I\'ve sent.');
});

app.listen(3000);
