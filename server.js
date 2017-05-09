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

io.sockets.on('sendAccountData', function (data) {
	console.log("HELLO WORLD");
	var connection = mysql.createConnection({
		 // host     : 'localhost',
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});
	connection.connect();
	connection.query("INSERT INTO User(user,password) VALUES("+ "'"+ data.user + "'" + ",'"+ data.password + "');", function(err, rows, fields) {
	if (err){
				console.log("ERROR creating table");
			}
	});
	connection.end();
});

io.sockets.on('sendLoginData', function (data) {
	console.log("HELLO WORLD");
	var connection = mysql.createConnection({
		 // host     : 'localhost',
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});
	connection.connect();
	connection.query("SELECT * from User WHERE username ="+ "'" + data.username+ "'" +";", function(err, rows, fields) {
		if (!err){
			var string = JSON.stringify(rows);
		
			if (JSON.stringify(rows) === "[]"){
				console.log("username was not in database... create new account");
				correct = 0;
			}
			else{
				var correctpassword = json[0]._password;
			
				if (password === correctpassword){
					//console.log(true);
					console.log('correct password entered');
					correct = 1;
				}
				else{
					console.log(false);
					console.log('incorrect password');
					correct = 2;
				}
			}
	
		}
	});
	//connection.query("INSERT INTO ")
	connection.end();
	var username = data.name;
	var password = data.pass;
	var sendLoginData = {username: username, password: password, correct: correct };	
	socket.emit('sendPasswordVerification',sendLoginData);
});





server.listen(8080, function(){
    console.log('Listening at port 8080');
});

io.sockets.on('connection', function (socket) {
    console.log('Someone connected');
	socket.emit("test", {name: "Maddie"});

});

