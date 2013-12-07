describe("bTree", function() {
  var bTree;

  beforeEach(function() {
    bTree = new BTree();
  });

  it("should have methods named 'addValue', and 'lookup'", function() {
    expect(bTree.addValue).toEqual(jasmine.any(Function));
    expect(bTree.lookup).toEqual(jasmine.any(Function));
  });

  it("should add at least one number to the values array", function() {
    bTree.addValue(6);
    expect(bTree.values[0]).toEqual(6);
  });
});