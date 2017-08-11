angular
	.module('ngUsers')
	.filter('usersFilter', function() {

		return function(listings, salaryInfo) {

			var filtered = [];

			var min = salaryInfo.min;
			var max = salaryInfo.max;

			angular.forEach(listings, function(listing) {

				if(listing.salary >= min && listing.salary <= max) {

					filtered.push(listing);
				}
			});

			return filtered;
		}
	});