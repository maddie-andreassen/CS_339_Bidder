var exports = module.exports = {};

exports.Item = function(itemDescriptionP,picP,minBidAmountP,topBidP,nameP,itemIDP) {
	var self = {
		itemDescription:itemDescriptionP,
		pic:imageP,
		minBidAmount:minBidAmount,
		topBid:topBidP,
		name:nameP,
		itemID:itemIDP
	}

function createItem(itemDescription, minBidAmount,topBidID,name, itemID){
	var connection = mysql.createConnection({
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});

	connection.connect();
	connection.query("INSERT INTO Items(ItemDescription, MinBidAmount, TopBidID, Name, ItemID) VALUES ("+"'"+itemDescription+"','"+minBidAmount+"','"+topBidID"','"+name+"','"+itemID+"');",function(err, rows, fields) {
		if (err){
			console.log("Error adding item")
		}
	});
	console.log('end the connection')
	connection.end();
}
function getItems(){
	var connection = mysql.createConnection({
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});

	connection.connect();
	connection.query("SELECT * FROM Items;",function(err, rows, fields) {
		if (err){
			console.log("Error getting items")
		}
	});
	console.log('end the connection')
	connection.end();
	
}

}