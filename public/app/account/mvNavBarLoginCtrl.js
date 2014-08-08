'use strict';

angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvNotifier, mvIdentity, mvAuth, $location) {
	$scope.identity = mvIdentity;
	$scope.signin = function(username, password){
		mvAuth.authenticateUser(username, password).then(
			function(success){
				if(success){
					mvNotifier.notify('You have successfully signed in!', 'success');
				}
				else{
					mvNotifier.notify('Username/Password incorrect!', 'error');
				}	
			});
	}
	$scope.signout = function(){
		console.log('signout');
		mvAuth.logoutUser().then(function(){
			$scope.username = '';
			$scope.password = '';
			mvNotifier.notify('You have successfully signed out!', 'success');
			$location.path('/');
		});
	}
});