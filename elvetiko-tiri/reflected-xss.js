// http://localhost:3000/?lnk=%3Ca%20href=%22http://skgtech.io%22%20target=%22blank%22%3EJust%20an%20innocent%20link%3C/a%3E%20with%20some%20text.
// http://localhost:3000/?lnk=%3Cscript%3Ealert%28%27%CE%98%CE%91%20%CE%A3%CE%9F%CE%A5%20%CE%9A%CE%91%CE%9D%CE%A9%20%CE%96%CE%97%CE%9C%CE%99%CE%91%20%CE%A4%CE%A9%CE%A1%CE%91\n%CE%A4%CE%97%CE%9D%20%CE%95%CE%92%CE%91%CE%A8%CE%95%CE%A3%20%3E:-%29%27%29%3C/script%3E

var express = require('express');
var xss = require('xss');

var app = express();

app.get('/', function indexGetHandler (req, res) {
  var lnk = req.query.lnk;

  res.send('<p>Rendered html:' +
    '<p>' + lnk);
}).listen(3000);
