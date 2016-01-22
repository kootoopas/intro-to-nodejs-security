var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function indexGetHandler (req, res) {
  res.send('<h1>req.query:<pre>' + JSON.stringify(req.query, null, 4) + '</pre></h1>');
});

app.post('/', function indexPostHandler (req, res) {
  res.send('req.body: ' + JSON.stringify(req.body, null, 4));
});

app.listen(3000);
