var http = require('http');
var fs = require('fs');

var ip   = "127.0.0.1";
var port = 1337;

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port, ip);






console.log("Server running at http://" + ip + ":" + port);
