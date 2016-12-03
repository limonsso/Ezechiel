'use strict';

angular.module('intertecth')
  .config(function ($stateProvider) {
    $stateProvider.state('error', {
      url: '/error?code'
    });
  })
  .controller('ErrorCtrl', function ($scope, $stateParams) {
    $scope.errorCode = $stateParams.code;
  });
