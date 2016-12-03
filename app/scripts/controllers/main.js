'use strict';

/**
 * @ngdoc function
 * @name interTechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the interTechApp
 */
angular.module('interTechApp')
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50; // always scroll by 50 extra pixels
    }])
    .controller('MainCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });