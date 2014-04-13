/* global Dygraph */
/* global document */
/* global csvdata */
/* global console */
/* global controllers */
/* global $routeParams */
/* jshint -W097 */
'use strict';

controllers.controller('superChart.controllers.MenuController', ['$scope','$routeParams','superChart.services.chartService',function($scope,$routeParams, chartService) {
	$scope.chartdata = chartService.getAll();
    $scope.init = function() 
    {
        console.log("Inside init method");
        if($scope.charts!==null)
        {
            $scope.charts = $scope.chartdata;

        }
    };
    
}]);