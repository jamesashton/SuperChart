/* global angular */
/* global console */
/* jshint -W097 */
'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('superChart', [
  'ngRoute',
  'superChart.filters',
  'superChart.services',
  'superChart.directives',
  'superChart.controllers'
]).config(['$routeProvider',function($routeProvider) {
    
    $routeProvider.when('/chartView/:chartIndex', {templateUrl: 'partials/chart.html', controller: 'superChart.controllers.ChartController'});
    $routeProvider.when('/newChartView', {templateUrl: 'partials/newChart.html', controller: 'superChart.controllers.NewChartController'});
    $routeProvider.otherwise({redirectTo: '/newChartView'});

}
]);
