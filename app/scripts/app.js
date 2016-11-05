'use strict';

/**
 * @ngdoc overview
 * @name interTechApp
 * @description
 * # interTechApp
 *
 * Main module of the application.
 */
angular
    .module('interTechApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });