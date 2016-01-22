// lorem-ipsum 1 paragraph | http :3000
// lorem-ipsum 100 paragraphs | http :3000
// lorem-ipsum 29 paragraphs | http :3000
var express = require('express');
var contentLength = require('express-content-length-validator');
var helmet = require('helmet');

var app = express();

var MAX_CONTENT_LENGTH_ACCEPTED = 9999;

app.use(helmet());
app.use(contentLength.validateMax({max: MAX_CONTENT_LENGTH_ACCEPTED}));

app.post('/', function indexPostHandler (req, res) {
  res.send('Thank you. We\'ve received content of length ' +
            req.headers['content-length'] + ' from you.');
}).listen(3000);
