describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it("should have methods named 'build', 'lookup', and 'testWordiness'", function() {
    expect(binarySearchTree.build).toEqual(jasmine.any(Function));
    expect(binarySearchTree.lookup).toEqual(jasmine.any(Function));
    expect(binarySearchTree.testWordiness).toEqual(jasmine.any(Function));
  });

  it("should build a simple word list", function() {
    prefixTree.build(simpleWordList);
    expect(prefixTree.children).toEqual(["a", "c", "s", "t"]);
    expect(prefixTree.children[0].children).toEqual(["s"]);
  });
});
