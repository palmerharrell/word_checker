// Write a test suite to validate your JavaScript functions.

describe("The specification for Word Checker", function() {
  
  // There should be a function defined with the name checkWordCount.
  it("should have a checkWordCount function", function() {
    expect(checkWordCount).toBeDefined();
  });

  // That function should return false if a string sent to it has more than 100 words in it.
  it("checkWordCount should return false if string sent to it is over 100 words", function() {
    // expect(add(2, 5)).toBe(7);
  });

  // There should be a function defined with the name duplicateCheck.
  it("should have a duplicateCheck function", function() {
    expect(duplicateCheck).toBeDefined();
  });

  // That function should return false if a string has duplicate words in it.
  it("duplicateCheck should return false if string has duplicate words in it", function() {
    // expect(add(2, 5)).toBe(7);
  });

  // There should be a function defined with the name verifyAlphaNumeric.
  it("should have a verifyAlphaNumeric function", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  // That function should return false if there are any non-alphanumeric characters in a string.
  it("verifyAlphaNumeric should return false if string has non-alphanumeric chars in it", function() {
    // expect(add(2, 5)).toBe(7);
  });

});
