'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /chartView when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/chartView");
  });


  describe('chartView', function() {

    beforeEach(function() {
      browser.get('index.html#/chartView');
    });


    it('should render chartView when user navigates to /chartView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('newChartView', function() {

    beforeEach(function() {
      browser.get('index.html#/newChartView');
    });


    it('should render newChartView when user navigates to /newChartView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
