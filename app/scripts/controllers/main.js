'use strict';

/**
 * @ngdoc function
 * @name interTechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the interTechApp
 */
angular.module('interTechApp', ['duScroll'])
    .controller('MainController', ['$anchorScroll', '$location', '$scope', '$document', function($anchorScroll, $location, $scope, $document) {
        //
    }]).value('duScrollOffset', 80);