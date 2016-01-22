var http = require('http');
var url = require('url');
var childProcess = require('child_process');

http.createServer( function (req, res) {
  var parsedUrl = url.parse(req.url, true);

  res.writeHead(200, {'Content-Type:': 'text/html'});
  childProcess.exec('ls -a ' + parsedUrl.query.path, function (err, stdout, stderr) {
    res.write(stdout);
    res.write(stderr);
    res.end();
  });
}).listen(3000);
