'use strict';

angular
  .module('hrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/timecard.html',
        controller: 'TimeCardCtrl',
        controllerAs: 'timecardVM'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'TimeCardCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
