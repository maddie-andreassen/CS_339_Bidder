var app = angular.module('myApp', [
	'socket.io',
	'ngRoute'
]);

app.config(function ($socketProvider, $routeProvider) {
	$socketProvider.setConnectionUrl('http://localhost:8080');
	
	$routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    }).
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	}).
	when('/createAccount', {
		templateUrl: 'views/createAccount.html',
		controller: 'CreateAccountCtrl'
	}).
	when('/bidder', {
		templateUrl: 'views/bidder.html',
		controller: 'BidderCtrl'
	}).
	when('/items', {
		templateUrl: 'views/items.html',
		controller: 'ItemsCtrl'
	}).
	when('/createItem', {
		templateUrl: 'views/createItem.html',
		controller: 'ItemCreationCtrl'
	}).
	when('/newAuction', {
		templateUrl: 'views/newAuction.html',
		controller: 'AuctionCreationCtrl'
	}).
	when('/currAuction', {
		templateUrl: 'views/auction.html',
		controller: 'AuctionCtrl'
	}).
    otherwise({
      redirectTo: '/'
    });
});

app.controller('MainCtrl', function MainCtrl($scope, $socket) {
	console.log("Inside MainCtrl");
	$scope.user = {
		name: "",
		pass: ""
	};
	$scope.auction = {
		items: [],
		status: false,
		currItem: {},
		idx: 0
	};
	
	$scope.userStatus = {
		isUser: false,
		isHost: false
	};
	
	$scope.logoutUser = function(){
		console.log("User Logged Out!");
		
		$scope.userStatus = {
			isUser: false,
			isHost: false
		};
		
		$scope.user = { name: "", pass: "" };
	}
});
app.controller('LoginCtrl', function LoginCtrl($scope, $socket) {
	console.log("Inside LoginCtrl");
	console.log($scope);
	$scope.loginUser = {
		name: "",
		pass: ""
	};
	
	$scope.login = function(){
		$scope.user.name = $scope.loginUser.name;
		$scope.user.pass = $scope.loginUser.pass;
		
		if($scope.user.name === "host"){
			$scope.userStatus.isHost = true;
		} 
		else{			
			$scope.userStatus.isUser = true;
		} 
	};
});
app.controller('CreateAccountCtrl', function CreateAccountCtrl($scope, $socket) {
	console.log("Inside CreateAccountCtrl");
	$scope.createUser = {
		name: "",
		pass: ""
	};
	
	$scope.createAccount = function(){
		$scope.user.name = $scope.createUser.name;
		$scope.user.pass = $scope.createUser.pass;
		if($scope.user.name === "host"){
			$scope.userStatus.isHost = true;
		} 
		else{			
			$scope.userStatus.isUser = true;
		} 
	};
});
app.controller('BidderCtrl', function BidderCtrl($scope, $socket) {
	console.log("Inside BidderCtrl");

});
app.controller('ItemsCtrl', function ItemsCtrl($scope, $socket) {
	console.log("Inside ItemsCtrl");
});
app.controller('ItemCreationCtrl', function ItemCreationCtrl($scope, $socket) {
	console.log("Inside ItemCreationCtrl");
	$scope.item = {
		title: "",
		des: "",
		bid: 0,
		minBid: 0,
		purchasedBy: "",
		status: "In Stock"
	};
	
	$scope.addItem = function(){
		$scope.auction.items.push($scope.item);
		$scope.item = {
			title: "",
			des: "",
			bid: 0,
			minBid: 0,
			purchasedBy: "",
			status: "In Stock"
		};
	};
});
app.controller('AuctionCreationCtrl', function AuctionCreationCtrl($scope, $socket) {
	console.log("Inside AuctionCreationCtrl");

});
app.controller('AuctionCtrl', function AuctionCtrl($scope, $socket) {
	console.log("Inside AuctionCtrl");
	$scope.bidAmount = $scope.auction.currItem.bid;
	$scope.bidStatus = "";
	
	$scope.startAuction = function(){
		if($scope.auction.items.length > 0){
			$scope.auction.currItem = $scope.auction.items[0];
			$scope.auction.idx = 0;
			$scope.auction.status = true;
		}
		else $scope.errorStatus = "There are no items to bid.";
	};
	$scope.bidOnItem = function(){
		if($scope.bidAmount > $scope.auction.currItem.bid) {
			$scope.auction.currItem.purchasedBy = $scope.user.name;
			$scope.auction.currItem.bid = $scope.bidAmount;
			$scope.auction.currItem.minBid = $scope.bidAmount;
			$scope.bidStatus = "";
		}
		else $scope.bidStatus = "Invalid Input";
	};
	$scope.nextItem = function(){
		$scope.auction.idx++;
		if($scope.auction.items[$scope.auction.idx]){
			$scope.auction.currItem = $scope.auction.items[$scope.auction.idx];
		}
		else {
			$scope.auction.currItem = {};
			$scope.auction.status = false;
		}
	};
});