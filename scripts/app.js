'use strict';

angular.module('emojiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'emoji'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/people', {
            templateUrl: 'views/people.html',
            controller: 'MainCtrl'
        })
        .when('/nature', {
            templateUrl: 'views/nature.html',
            controller: 'MainCtrl'
        })
        .when('/objects', {
            templateUrl: 'views/objects.html',
            controller: 'MainCtrl'
        })
        .when('/places', {
            templateUrl: 'views/places.html',
            controller: 'MainCtrl'
        })
        .when('/symbols', {
            templateUrl: 'views/symbols.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/people'
        });
  }]);
