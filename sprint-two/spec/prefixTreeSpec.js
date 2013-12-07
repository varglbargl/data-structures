describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'build', 'lookup', and 'makeNode'", function() {
    expect(prefixTree.build).toEqual(jasmine.any(Function));
    expect(prefixTree.lookup).toEqual(jasmine.any(Function));
    expect(prefixTree.makeNode).toEqual(jasmine.any(Function));
  });

  it("should build a simple word list", function() {
    prefixTree.build(sampleWordlist);
    expect(prefixTree.children.length).toEqual(4);
    expect(prefixTree.children[0].value).toNotEqual("");
  });

  it("should not allow for duplicate letters in one node's children", function() {
    prefixTree.build(sampleWordlist);
    expect(prefixTree.children[0].children.length).toEqual(1);
  });

  it("should not die on build with a long wordlist", function() {
    prefixTree.build(scrabbleWordlist);
  });

  it("should find at least one word", function() {
    prefixTree.build(sampleWordlist);
    expect(prefixTree.lookup("sou")).toEqual(["soup"]);
  });

  it("should probably find more than one word sometimes too", function() {
    prefixTree.build(sampleWordlist);
    expect(prefixTree.lookup("so")).toEqual(["soup", "soap"]);
  });
});