describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'build', 'lookup', and 'testWordiness'", function() {
    expect(prefixTree.build).toEqual(jasmine.any(Function));
    expect(prefixTree.lookup).toEqual(jasmine.any(Function));
    expect(prefixTree.testWordiness).toEqual(jasmine.any(Function));
  });

  it("should build a simple word list", function() {
    prefixTree.build(simpleWordList);
    expect(prefixTree.children).toEqual(["a", "c", "s", "t"]);
    expect(prefixTree.children[0].children).toEqual(["s"]);
  });

  it("should not allow for duplicate letters in one node's children", function() {
    prefixTree.build(simpleWordList);
    expect(prefixTree.children[0].children.length).toEqual(1);
  });

  it("should find at least one word", function() {
    prefixTree.build(simpleWordList);
    expect(prefixTree.lookup("sou")).toEqual("soup");
  });
});
