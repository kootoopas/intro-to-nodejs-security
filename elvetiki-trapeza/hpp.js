var express = require('express');
var validator = require('express-validator');
var bodyParser = require('body-parser');
var hpp = require('hpp');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(hpp());
app.use(validator());

app.get('/', function indexGetHandler (req, res) {
  req.checkQuery('id', 'You need to provide an id.').notEmpty();
  req.checkQuery('id', 'The id must be an integer.').isInt();

  var errors = req.validationErrors();
  if(errors) {
    res.send('<h1>Validation errors:<pre>' + JSON.stringify(errors, null, 4) + '</pre></h1>');
    return;
  }

  res.send('<h1>✔︎ req.query:<pre>' + JSON.stringify(req.query, null, 4) + '</pre></h1>');
});

app.post('/', function indexPostHandler (req, res) {
  res.send('✔︎ req.query: ' + JSON.stringify(req.body, null, 4));
});

app.listen(3000);
