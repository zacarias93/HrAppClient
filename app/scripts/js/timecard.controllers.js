(function () {
    'use strict';

    angular
        .module('hrApp')
        .controller('TimecardCtrl', TimecardCtrl);

    TimecardCtrl.$inject = ['timecardService', '$http'];
    function TimecardCtrl(timecardService, $http) {
        var vm = this;

        vm.employeeID = '';
        vm.timeIn = '';
        vm.timeOut = '';
        vm.addTimecard = addTimecard;
        vm.message = '';

        var timecard = {
			"employeeID": '',
			"timeIn": '',
			"timeOut": ''
		};

        function setTimecard() {
            timecard.employeeID = vm.employeeID;
            timecard.timeIn = vm.timeIn;
            timecard.timeOut = vm.timeOut;
        }

        function addTimecard() {
            setTimecard();
            console.log(timecard);
            timecardService
                .add(timecard)
                .then(function(response) {
                    console.log(response);
                    clear();
                    vm.message = 'Timecard Submitted!';
                })
        };

        function clear() {
            vm.employeeID = '';
            vm.timeIn = '';
            vm.timeOut = '';
            timecard.employeeID = '';
            timecard.timeIn = '';
            timecard.timeOut = '';
        };



    }
})();