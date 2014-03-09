'use strict';

angular.module('superChart.controllers.ChartController',[]).
controller('superChart.controllers.ChartController', ['$scope',function($scope) {
         $scope.chartDetail = {
                ccyPair: 'EURUSD',
                title: 'EURUSD',
                description: 'A description of EURUSD'
         }
    }]);
