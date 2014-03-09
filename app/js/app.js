'use strict';


// Declare app level module which depends on filters, and services
angular.module('superChart', [
  'ngRoute',
  'superChart.filters',
  'superChart.services',
  'superChart.directives',
  'superChart.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chartView', {templateUrl: 'partials/chart.html', controller: 'chartCtrl'});
  $routeProvider.when('/newChartView', {templateUrl: 'partials/newChart.html', controller: 'newChartCtrl'});
  $routeProvider.otherwise({redirectTo: '/newChartView'});
}]);
