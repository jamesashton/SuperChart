/* global services */
/* global data */
/* jshint -W097 */
/* ChartService */
/* global angular */

'use strict';

services.factory('superChart.services.chartService', function(){
  	return {
				getAll: function() {
					var self = this;
					return self.data;
				},
				data : [{
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
							seriesData: csvdata
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
							seriesData: csvdata
					 }]
    
	};
});


