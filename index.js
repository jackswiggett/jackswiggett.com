var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 80);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/css/:filename', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/' +
                 req.params.filename));
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});