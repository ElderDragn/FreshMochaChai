// Defining shorthand access to chai's testing functions
var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

////////////////////////////////////////////////////////////
//////////////////                       ///////////////////
//////////////////    Mocha Structure    ///////////////////
//////////////////                       ///////////////////
////////////////////////////////////////////////////////////

// Suites are created with functions that take a title and a callback function 
// describe() will define a group of tests
describe('Suite Title', function() {

  // beforeEach runs the callback you pass to it before every single it()
  // This allows many tests to have the same initial variables
  beforeEach(function() {
    trueVar = true;
    obj1 = {a: 2};
    obj2 = {a: 2};
  });

  // it() is where single unit tests take place
  it('Passing unit test', function() {
    (trueVar).should.equal(true);
    // We can try to reassign trueVar but it will be re-initialized by beforeEach before the next test
    trueVar = false;
  });

  it('Failing unit test', function() {
    (trueVar).should.equal(false);
  });

  it('Deep equality test', function() {
    (obj1).should.eql(obj2);
  });

  // It can be useful to disable single tests with xit() if they take a long time to run, or if you have not written them yet
  xit('Pending test', function() {
    (trueVar).should.equal(true);
  });
  // You can also use xdescribe to disable all tests inside:
  xdescribe('Pending suite', function() {
    it('Nested pending test', function() {
      
    });
  });

  // You can nest suite descriptions! :)
  xdescribe('Async Suite', function() {

    // If you need to run asynchronous code, you can place a callback parameter to your test function (usually named "done")
    // This tells mocha to wait until that callback is called before considering the test to have finished.
    it('1 second test', function(done) {
      setTimeout(done, 1000);
    });

    // The default limit for how long a test can take is 2000ms
    it('default 2000ms limit timeout', function(done) {
      setTimeout(done, 2000);
    });
    
    // You can shorten or extend a test's time limit with this.timeout()
    it('500ms test, 100ms limit', function(done) {
      this.timeout(100);
      setTimeout(done, 500);
    });
    
    it('2500ms test, 3000ms limit', function(done) {
      this.timeout(3000);
      setTimeout(done, 2500);
    });

  });
});

////////////////////////////////////////////////////////////
//////////////////                       ///////////////////
//////////////////      Chai Syntax      ///////////////////
//////////////////                       ///////////////////
////////////////////////////////////////////////////////////

describe('Chai syntax suite', function() {
  
  afterEach(function() {
    myTaxes = 'Still not done';
  })
  
  // Many testing libraries (including chai) allow you to chain functions together like english sentences
  describe('Should', function() {
    
    it('Sky is blue', function() {
      skyIsBlue.should.be.true;
    });
    
    it('Do my taxes', function() {
      myTaxes.should.equal('Still not done');
      doTaxes()
      myTaxes.should.equal('Done!');
    });
    
    it('4 Squared', function() {
      square(4).should.equal(16);
    });
    
  });

  describe('Expect', function() {
    
    it('Sky is blue', function() {
      expect(skyIsBlue).to.be.true;
    });
    
    it('Do my taxes', function() {
      expect(myTaxes).to.equal('Still not done');
      doTaxes()
      expect(myTaxes).to.equal('Done!');
    });
    
    it('4 Squared', function() {
      expect(square(4)).to.equal(16);
    });
    
  });

  describe('Assert', function() {
    
    it('Sky is blue', function() {
      assert.equal(skyIsBlue, true)
    });
    
    it('Do my taxes', function() {
      assert.equal(myTaxes, 'Still not done');
      doTaxes();
      assert.equal(myTaxes, 'Done!');
    });
    
    it('4 Squared', function() {
      assert.equal(square(4), 16);
    });
    
  });
  
});
