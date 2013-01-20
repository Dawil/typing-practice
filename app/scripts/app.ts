/// <reference path="vendor/angular-1.0.d.ts" />
'use strict';

var typingPracticeApp = angular.module('typingPracticeApp', [])
  .config(<any[]>['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
			$locationProvider.html5Mode(true);
  }]);
