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
	self.getItemDescription(){
		return itemDescription;
	}
	self.getPic(){
		return pic;
	}
	self.getMinBidAmount(){
		return minBidAmount;
	}
	self.getTopBid(){
		return topBid;
	}
	self.getName(){
		return name;
	}
	self.getItemID(){
		return ID;
	}
}