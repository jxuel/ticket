var express = require('express');
var app = express();
var path = require('path');
var port = 8080

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/static' + '/index.html'));
});

app.listen(port);
console.log("Listen on port: ",port)