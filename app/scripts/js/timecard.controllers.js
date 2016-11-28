'use strict';


angular
	.module('hrApp')
	.controller('TimeCardCtrl', function (timecardService, $scope, $http) {

		$scope.timecard = {
			"employeeID": '',
			"timeIn": '',
			"timeOut": ''
		};

		var url = 'http://localhost:8080/timecard';

		$scope.timeCards = '';
		$scope.userInput = '';


		// $scope.$watch('timeCards', function(timeCards) {
		// 	if(angular.isDefined(timeCards.then)){
		// 		timeCards.then(function(response){
		// 			console.log(response);
		// 			$scope.timeCards = response.data;
		// 		}, function(error){
		// 		});
		// 	}
		// });

		$scope.showAll = function () {

			$http({
				method: 'GET',
				url: url
			}).
				then(function (response) {
					$scope.timeCards = response.data;
					console.log($scope.timeCards);
				});
		}

		$scope.save = function (timecard) {
			console.log(timecard);
			timecardService.create(timecard);
		}


		$scope.remove = function (userInput) {
			console.log(userInput);
			var url1 = 'http://localhost:8080/remove/' + userInput;
			$http.get(url1)
				.then(function (response) {
					$scope.timeCards = response.data;
				});
		}

		$scope.findByID = function (userInput) {
			var url1 = 'http://localhost:8080/find/' + userInput;
			$http.get(url1)
				.then(function (response) {
					$scope.timeCards = response.data;
				});
		}

	});
