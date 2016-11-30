(function () {
	'use strict';


	angular
		.module('hrApp')
		.controller('AdminCtrl', AdminCtrl);

	AdminCtrl.$inject = ['timecardService', '$http'];
	function AdminCtrl(timecardService, $http) {
		var vm = this;
		vm.userInput = '';
		vm.timecards = [];
		vm.timecard = {
			"employeeID": '',
			"timeIn": '',
			"timeOut": ''
		};
		vm.showAll = showAll;
		vm.remove = remove;
		vm.findByID = findByID;

		function showAll() {
			timecardService
				.showAll()
				.then(function (response) {
					vm.timecards = response.data;
					console.log(vm.timecards);
					vm.userInput = '';
				})
		}

		function remove(id) {
			timecardService
				.remove(id)
				.then(function (response) {
					console.log(response);
					vm.userInput = '';
					vm.showAll();
				})
		}

		function findByID(userInput) {
			timecardService
				.findByID(userInput)
				.then(function (response) {
					console.log(response.data);
					vm.userInput = '';
					vm.timecards = response.data;

				})
		}
	}

})();
