var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var str = fs.readFileSync("index.html");
var buf = new Buffer(str);

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
