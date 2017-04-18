var chai = require('chai');
var expect = chai.expect;
var isNullOrEmpty = require('./../index');

describe('fake suite of tests', function() {
  // The tests have an English description...
  it('should return true given ""', function() {
    expect(isNullOrEmpty("")).to.be(true);
  });

  it('should return true given null', function() {
    expect(isNullOrEmpty(null)).to.be(true);
  });

  it('should return true given undefined', function() {
    expect(isNullOrEmpty(undefined)).to.be(true);
  });
  
  it('should return false given a string', function() {
    expect(isNullOrEmpty("Hello World")).to.be(false)
  });

});

