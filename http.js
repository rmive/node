var http = require('http');
var url = require('url');


var ip   = "127.0.0.1";
var port = 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  res.end();
}).listen(port, ip);

console.log("Server running at http://" + ip + ":" + port);