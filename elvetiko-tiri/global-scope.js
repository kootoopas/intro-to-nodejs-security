var express = require('express');

var app = express();
var global = 0;

app.get('/', function(req, res) {
  global++;
  res.send('<h2>Beware of Global Scope.</h2>'+
  'Global Scope Variable : '+ global)
});
app.listen(3000);
