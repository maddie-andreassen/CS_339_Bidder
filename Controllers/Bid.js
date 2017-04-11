var exports = module.exports = {};

exports.Bid = function(bidIDP,bidAmountP,itemIDP,userIDP) {
	var self = {
		bidID: bidIDP,
		bidAmount: bidAmountP,
		itemID: itemIDP,
		userID: userIDP,
	}

}

function createBid(bidID, bidAmount,itemID,userID){
	var connection = mysql.createConnection({
		  port     : '3300',
		  user     : 'luke',
		  password : 'root',
		  database : 'auction'
	});

	connection.connect();
	connection.query("INSERT INTO Bid(BidID, BidAmount, ItemID, UserID) VALUES ("+"'"+bidID+"','"+bidAmount+"','"+itemID"','"+userID+"');",function(err, rows, fields) {
		if (err){
			console.log("Error adding bid")
		}
	});
	console.log('end the connection')
	connection.end();
}