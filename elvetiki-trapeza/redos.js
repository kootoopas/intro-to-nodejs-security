// input strings:
// kootoopas@gmail.com
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.5555555555555555555555555555555555555555{
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.55555555555555555555555555555555555555555{
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.555555555555555555555555555555555555555555555555555555{

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var contentLength = require('express-content-length-validator');

var app = express();

var MAX_CONTENT_LENGTH_ACCEPTED = 0;

app.use(bodyParser.urlencoded({extended: false}));
app.use(contentLength.validateMax({max: MAX_CONTENT_LENGTH_ACCEPTED}));
app.use(validator());

app.get('/', function indexGetHandler (req, res) {
  var starttime = process.hrtime();
  var contentLength = '<p>Content length: ' + JSON.stringify(req.headers, null, 4);

  req.checkQuery('email', 'Email address cannot be empty.').notEmpty();
  req.checkQuery('email', 'Invalid email address.').isEmail();

  var errors = req.validationErrors();
  if(errors) {
    res.send('<p>There have been validation errors: ' + JSON.stringify(errors, null, 4) +
             '<p>Server Response Time: ' + process.hrtime(starttime), 400);
    return;
  }

  res.send('<p>User Input : ' + req.query.email +
           '<p>Server Response Time: ' + process.hrtime(starttime));
}).listen(3000);
