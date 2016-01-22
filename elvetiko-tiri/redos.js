// input strings:
// kootoopas@gmail.com
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.5555555555555555555555555555555555555555{
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.55555555555555555555555555555555555555555{
// jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.555555555555555555555555555555555555555555555555555555{

var express = require('express');
var app = express();

app.get('/', function indexGetHandler (req, res) {
  var startTime = process.hrtime();
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<p>User Input: ' + req.query.email);
  res.write('<p>Properly formatted email? ' + ((emailExpression.test(req.query.email))? 'Yes.' : 'No.'));
  res.write('<p>Server Response Time: ' + process.hrtime(startTime));
  res.end();
}).listen(3000);
