'use strict';

angular.module('intertecth')
  .config(function ($stateProvider) {
    $stateProvider.state('index', {
      url: '/'
    });
  })
  .controller('IndexCtrl', function ($scope) {
      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      ];
  });
