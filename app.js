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
    otherwise({
      redirectTo: '/'
    });
	
});

app.controller('MainCtrl', function MainCtrl($scope, $socket) {
	console.log("Inside MainCtrl");
    $socket.on('test', function (data) {
		$scope.name = data.name;
    });
});
app.controller('LoginCtrl', function LoginCtrl($scope, $socket) {
	console.log("Inside LoginCtrl");

});
app.controller('CreateAccountCtrl', function CreateAccountCtrl($scope, $socket) {
	console.log("Inside CreateAccountCtrl");

});
app.controller('BidderCtrl', function BidderCtrl($scope, $socket) {
	console.log("Inside BidderCtrl");

});
app.controller('ItemsCtrl', function ItemsCtrl($scope, $socket) {
	console.log("Inside ItemsCtrl");

});
