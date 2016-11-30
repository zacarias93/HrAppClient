(function() {
'use strict';

    angular
        .module('hrApp')
        .service('timecardService', timecardService);

    timecardService.$inject = ['$http'];
    function timecardService($http) {

        var url = 'http://localhost:8080/';
        var cardsByID = {};

        var service = {
            add: add,
            remove: remove,
            create: create,
            findByID: findByID,
            showAll: showAll,

        }
        return service;

        function add(timecard) {
            return $http
                .post(url + '/timecard', timecard)
                .then(function(response) {
                    console.log(response);
                    return response;
                }, function (response) {
                    console.log('error w/ adding timecard');
                })
        }

        function remove(id) {
            return $http
                .get(url + 'remove/' + id)
                .then(function(response) {
                    console.log(response);
                })
        }

        function showAll() {
            return $http
                .get(url + 'timecard')
                .then(function(response) {
                    console.log(response);
                    return response;
                }, function(response) {
                    console.log('error w/ finding all timecards');
                })
        };

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
                .get(url + 'timecard/' + id)
                .then(function(response) {
                    console.log(response);
                    return response;
                }, function(response) {
                    console.log('error w/ finding employees timecards');
                })
        };

    }
})();
