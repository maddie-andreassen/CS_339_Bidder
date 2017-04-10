var exports = module.exports = {};

exports.User = function(usernameP,passwordP,userIDP) {
	var self = {
		username: usernameP,
		password: passwordP,
		userID: userIDP
	}
	self.getUsername(){
		return username;
	}
	self.getPassword(){
		return password;
	}
	self.getUserID(){
		return userID;
	}
	
}