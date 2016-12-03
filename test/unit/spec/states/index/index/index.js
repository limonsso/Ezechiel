'use strict';

describe('Controller: IndexCtrl', function () {

  var IndexCtrl, scope, $rootScope, deferred, promise;

  beforeEach(function () {

    module('intertecth');

    inject(function ($controller, _$rootScope_, $q) {
      $rootScope = _$rootScope_;

      deferred = $q.defer();
      promise = deferred.promise;

      scope = $rootScope.$new();
      IndexCtrl = $controller('IndexCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    $rootScope.$digest();
    expect(scope.awesomeThings).length.to.be(3);
  });
});
