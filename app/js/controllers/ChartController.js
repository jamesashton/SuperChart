/* global Dygraph */
/* global document */
/* global data */
/* global console */
/* global angular */
/* global $routeParams */
/* jshint -W097 */
'use strict';

angular.module('superChart.controllers.ChartController',[]).
controller('superChart.controllers.ChartController', ['$scope','$routeParams',function($scope,$routeParams) {
         $scope.selectedChartIndex = $routeParams.chartIndex;
        
         $scope.chartdata = [{
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
                endTime: null,
                seriesData: data
         },{
                name: 'Yen Crosses',
                shortname: 'YenXs',
                description: 'Set of Yen crosses.',
                series: [{
                            name: 'EUR/JPY',
                            expression: 'EURUSD',
                            colour: '#00FFFF'
                        },{
                            name: 'USD/JPY',
                            expression: 'USDJPY',
                            colour: '#0000FF'
                        },{
                            name: 'GBP/JPY',
                            expression: 'AUD/USD',
                            colour: '#00FF00'
                        }],
                startTime: '01/01/2013',
                endTime: null,
                seriesData: data
         }];
	
        $scope.chartDetail = $scope.chartdata[$routeParams.chartIndex];
        $scope.chart = null;
        $scope.init = function() 
        {
           
            if($scope.charts!==null)
                $scope.charts = $scope.chartdata;
          
        };
        $scope.drawChart = function()
        {
          var chartContainerid = "chart" + $scope.selectedChartIndex;
         console.log("chartContainerid:" + chartContainerid);
         console.log("chartContaineridinnerHTML" + document.getElementById(chartContainerid).innerHTML);
            $scope.chart = new Dygraph(
                                  document.getElementById(chartContainerid),
                                  data,
                                  {
                                    customBars: true,
                                    title: $scope.chartDetail.description,
                                    ylabel: '',
                                    legend: 'always',
                                    labelsDivStyles: { 'textAlign': 'right' },
                                    showRangeSelector: true
                                  }
                              );
        };
		$scope.expressionSearch = function(serie)
		{
			console.log("Expression search has been called");
			serie.expression = serie.expression + "(UPDATED)";
		};
		 
        $scope.init();
    }]);
