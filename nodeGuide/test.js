// Before getting started be sure to run `npm install`
// If starting a fresh project, you will need to npm install Mocha and a testing library (or use node's included assert module)

// Then import your preferred testing library:
var { expect, should, assert } = require('chai');

// To test, run `mocha [filename]` in the terminal. 
// If no filename provided, mocha will try to use `test.js` in the project's root directory (where package.json is located)

describe('Node suite', function() {
  
  it('True should be true', function() {
    expect(true).to.be.true;
  })
  
  it('False should not be true', function() {
    expect(false).to.not.be.true;
  })
})