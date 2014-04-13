/* global Dygraph */
/* global document */
/* global csvdata */
/* global console */
/* global controllers */
/* global $routeParams */
/* jshint -W097 */
'use strict';


controllers.controller('superChart.controllers.ChartController', ['$scope','$routeParams','superChart.services.chartService',function($scope,$routeParams, chartService) {
         $scope.selectedChartIndex = $routeParams.chartIndex;
       
         $scope.chartdata = chartService.getAll();
  
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
                                  csvdata,
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
