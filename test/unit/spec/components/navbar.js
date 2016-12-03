'use strict';

describe('Component: navbarComponent', function () {

  describe('Directive: navbarComponent', function () {
    var element, scope, $compile;

    beforeEach(function () {

      module('intertecth');

      inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
      });

    });

    it('should have the component class', function () {
      element = angular.element('<navbar-component></navbar-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element).to.have.class('navbar-component');
    });

  });

  describe('Controller: navbarComponentCtrl', function () {

    var Ctrl, scope, element;

    beforeEach(function () {

      module('intertecth');

      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<navbar-component></navbar-component>');
        Ctrl = $controller('navbarComponentCtrl', {
          $scope: scope,
          $element: element
        });
      });
    });

    it('should render a message', function () {
      expect(scope.text).to.equal('this is the navbar component');
    });
  });

});
