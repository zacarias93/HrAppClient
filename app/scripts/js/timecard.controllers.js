'use strict';


angular
	.module('hrApp')
	.controller('TimeCardCtrl', function (timecardService, $scope, $http) {

		var vm = this;
		var url = 'http://localhost:8080/timecard';

		vm.timecards = [];		
		vm.timecard = {
			"employeeID": '',
			"timeIn": '',
			"timeOut": ''
		};

		vm.showAll = function () {
			timecardService
				.showAll()
				.then(function(response) {
					vm.timecards = response.data;
					console.log(vm.timecards);
				})
		}

		vm.remove = function (id) {
			timecardService
				.remove(id)
				.then(function(response) {
					console.log(response);
				})
		}

		$scope.findByID = function (userInput) {
			var url1 = 'http://localhost:8080/find/' + userInput;
			$http.get(url1)
				.then(function (response) {
					$scope.timeCards = response.data;
				});
		}

	});
