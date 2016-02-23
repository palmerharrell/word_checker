// Write a test suite to validate your JavaScript functions.

describe("Word Checker", function() {
  
  it("should have a checkWordCount function", function() {
    expect(checkWordCount).toBeDefined();
  });

  it("checkWordCount should return false if string sent to it is over 100 words", function() {
    expect(checkWordCount("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatum, provident mollitia nisi inventore! Impedit itaque perferendis cum aliquam, eius? Quidem esse tenetur amet iste nam quasi sed rem, culpa est earum, error asperiores assumenda debitis, molestiae repellendus autem unde necessitatibus delectus ut vitae maxime nihil accusamus! Quibusdam ad eligendi soluta laboriosam aliquid fuga repellendus porro ipsam sunt, quis temporibus. Quos nostrum tenetur nisi quia adipisci delectus temporibus, praesentium, natus quo est ipsa animi veniam culpa totam non consequatur in ipsum corrupti unde enim dolor! Aperiam error, et a. Commodi officiis odio, consequatur soluta itaque cumque tenetur deleniti eius minima fugit ut blanditiis, amet quidem nesciunt nihil vero assumenda eum.")).toBe(false);
  });

  it("should have a duplicateCheck function", function() {
    expect(duplicateCheck).toBeDefined();
  });

  it("duplicateCheck should return false if string has duplicate words in it", function() {
    expect(duplicateCheck("testing duplicates, testing")).toBe(false);
  });

  it("should have a verifyAlphaNumeric function", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it("verifyAlphaNumeric should return false if string has non-alphanumeric chars in it", function() {
    expect(verifyAlphaNumeric("One of these 1s is not a word")).toBe(false);
  });

});
