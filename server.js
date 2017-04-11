var express = require('express');
var app = express();

var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname));
app.get('/', function(req, res) { 
	res.sendFile(path.join(__dirname + '/index.html')); 
});





server.listen(8080, function(){
    console.log('Listening at port 8080');
});

io.sockets.on('connection', function (socket) {
    console.log('Someone connected');
	socket.emit("test", {name: "Maddie"});

});