angular
	.module('ngUsers')
	.factory('usersFactory', function($http) {

		function getUsers() {
			return $http.get('data/data.json');
		}

		return {
			getUsers: getUsers
		}
	});