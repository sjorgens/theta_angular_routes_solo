var express = require('express');
var index = require('./routes/index');
var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(3000, function(request, response){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});