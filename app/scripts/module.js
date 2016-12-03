'use strict';

var components = angular.module('intertecth.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('intertecth', [
  'intertecth.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'ngStorage'
]);
angular.componentFactory.moduleDecorator(app);