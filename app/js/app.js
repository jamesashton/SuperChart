'use strict';


// Declare app level module which depends on filters, and services
angular.module('superChart', [
  'ngRoute',
  'superChart.filters',
  'superChart.services',
  'superChart.directives',
  'superChart.controllers.ChartController',
    'superChart.controllers.NewChartController'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chartView', {templateUrl: 'partials/chart.html', controller: 'superChart.controllers.ChartController'});
  $routeProvider.when('/newChartView', {templateUrl: 'partials/newChart.html', controller: 'superChart.controllers.NewChartController'});
  $routeProvider.otherwise({redirectTo: '/newChartView'});
}]);
