angular
	.module('ngUsers')
	.controller('usersController', function($scope, usersFactory) {

		$scope.users;

		$scope.salaryInfo = {
			min: 0,
			max: 1000000
		}

		$scope.newListing = {};

		$scope.addUser = function(newListing) {
			newListing.image = 'default-crib';
			$scope.users.push(newListing);
			$scope.newListing = {};
		}

		$scope.editUser = function(user) {
			$scope.editListing = true;
			$scope.existingListing = user;
		}

		$scope.saveUserEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		$scope.deleteUser = function(listing) {
			var index = $scope.users.indexOf(listing);
			$scope.users.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		usersFactory.getUsers().success(function(data) {
			$scope.users = data;
		}).error(function(error) {
			console.log(error);
		});

	});