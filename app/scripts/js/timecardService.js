(function() {
'use strict';

    angular
        .module('hrApp')
        .service('timecardService', timecardService);

    timecardService.$inject = ['$http'];
    function timecardService($http) {

        var url = 'http://localhost:8080/timecard';
        var cardsByID = {};

        var service = {
            create: create,
            findByID: findByID,

        }
        return service;

        function create(timecard) {
            return $http
                .post(url, timecard)
                .then(function(response) {
                    return response;
                }, function(response) {
                    console.log('error w/ creating timecard');
                }) 
        };

        function findByID(id) {
            return $http    
                .get
        }

    }
})();
