/* global console */
/* global $routeParams */
/* global app */
/* global controllers */
/* jshint -W097 */
'use strict';

app.controller('superChart.controllers.MenuController', ['$scope','$routeParams','superChart.services.chartService',function($scope,$routeParams, chartService) {
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