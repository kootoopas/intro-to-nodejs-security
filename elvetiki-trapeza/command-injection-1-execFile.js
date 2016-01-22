// mention spawn

var express = require('express');

var app = express();

var childProcess = require('child_process');

app.get('/', function indexGetHandler (req, res) {
  var lsCmd = childProcess.execFile('ls', ['-a', req.path]);
  // child_process.execFile(file[, args][, options][, callback])

  lsCmd.stdout.on('data', function (data) {
    res.write(data);
  });

  lsCmd.stderr.on('data', function (data) {
    res.write(data);
  });

  lsCmd.on('close', function (code) {
    res.end();
  });
}).listen(3000);
