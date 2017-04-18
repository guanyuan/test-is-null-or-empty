var isNullOrEmpty = require('./../index');

describe('fake suite of tests', function() {
  // The tests have an English description...
  it('should return true given ""', function() {
    expect(isNullOrEmpty("")).toBe(true);
  });

  it('should return true given null', function() {
    expect(isNullOrEmpty(null)).toBe(true);
  });

  it('should return true given undefined', function() {
    expect(isNullOrEmpty(undefined)).toBe(true);
  });
  
  it('should return false given a string', function() {
    expect(isNullOrEmpty("Hello World")).toBe(false)
  });

});

