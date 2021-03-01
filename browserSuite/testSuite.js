var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;
describe('Suite Title', function() {

  beforeEach(function() {
    trueVar = true;
    obj1 = {a: 2};
    obj2 = {a: 2};
  });

  it('Passing test', function() {
    (trueVar).should.equal(true);
  });

  it('Failing test', function() {
    (trueVar).should.equal(false);
  });

  it('Deep equality test', function() {
    (obj1).should.eql(obj2);
  });

  xit('More tests', function() {
    (trueVar).should.equal(true);
  });

  xit('More tests', function() {
    (trueVar).should.equal(true);
  });

  describe('Nested Suite', function() {

    xit('More tests', function() {
      (trueVar).should.equal(true);
    });

    xit('More tests', function() {
      (trueVar).should.equal(true);
    });

    xit('More tests', function() {
      (trueVar).should.equal(true);
    });

  });



});