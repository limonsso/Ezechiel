'use strict';

describe('Service: lodash', function () {

  var _;

  beforeEach(function () {

    module('intertecth');

    inject(function (___) {
      _ = ___;
    });

  });

  it('should do something', function () {
    expect(!!_).to.be.true;
  });

});