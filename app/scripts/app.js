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
        'ngRoute',
        'sanitize'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/profile/:id', {
                templateUrl: 'profile.html',
                controller: 'ProfileController as profile'
            })
            .otherwise({
                redirectTo: '/'
            });
    });