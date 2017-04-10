var express = require('express');
var app = express();

var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mysql = require("mysql");

app.use(express.static(__dirname));
app.get('/', function(req, res) { 
	res.sendFile(path.join(__dirname + '/index.html')); 
});

var testConnection = function(){
	console.log("HELLO WORLD");
	var connection = mysql.createConnection({
		 // host     : 'localhost',
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});
	connection.connect();
	connection.query("INSERT INTO Bid(BidID, BidAmount, ItemID, UserID) VALUES('1','1','1','1');", function(err, rows, fields) {
	if (err){
					console.log("ERROR creating table");
			}
	});
	//connection.query("INSERT INTO ")
	connection.end();
}
server.listen(3000, function(){
    console.log('Listening at port 8080');
	testConnection();
});

io.sockets.on('connection', function (socket) {
    console.log('Someone connected');
	socket.emit("test", {name: "Maddie"});
	testConnection();
});