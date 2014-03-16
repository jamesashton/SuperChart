'use strict';

angular.module('superChart.controllers.ChartController',[]).
controller('superChart.controllers.ChartController', ['$scope',function($scope) {
         $scope.chartDetail = {
                name: 'The Majors',
                shortname: 'Majors',
                description: 'Full history spot rate of the Majors.',
                series: [{
                            name: 'EUR/USD',
                            expression: 'EURUSD',
                            colour: '#00FFFF'
                        },{
                            name: 'USD/JPY',
                            expression: 'USDJPY',
                            colour: '#0000FF'
                        },{
                            name: 'GBP/USD',
                            expression: 'AUD/USD',
                            colour: '#00FF00'
                        },{
                            name: 'AUD/USD',
                            expression: 'AUDUSD',
                            colour: '#FF00FF'
                        },{
                            name: 'USD/CHF',
                            expression: 'USDCHF',
                            colour: '#FF0000'
                        },{
                            name: 'USD/CAD',
                            expression: 'USDCAD',
                            colour: '#FFFF00'
                        }],
                startTime: '01/01/2013',
                endTime: null
         }
		 
		$scope.expressionSearch = function(serie)
		{
			console.log("Expression search has been called");
			serie.expression = serie.expression + "(UPDATED)";
		}

		

		 
    }]);
