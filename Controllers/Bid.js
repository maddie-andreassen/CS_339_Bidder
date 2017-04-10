var exports = module.exports = {};

exports.Bid = function(bidIDP,bidAmountP,itemIDP,userIDP) {
	var self = {
		bidID: bidIDP,
		bidAmount: bidAmountP,
		itemID: itemIDP,
		userID: userIDP,
	}
	self.getBidID(){
		return bidID;
	}
	self.getBidAmount(){
		return bidAmount;
	}
	self.getItemID(){
		return itemID;
	}
	self.getUserID(){
		return userID;
	}
}