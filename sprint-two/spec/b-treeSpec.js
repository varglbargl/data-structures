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

  it("should add numbers to the values array in the right order", function() {
    bTree.addValue(8);
    bTree.addValue(6);
    expect(bTree.values[0]).toEqual(6);
  });

  it("should not allow for duplicates, just in the root values array for now", function() {
    bTree.addValue(6);
    bTree.addValue(6);
    bTree.addValue(6);
    expect(bTree.values.length).toEqual(1);
  });

  it("should branch CORRECTLY when passed three values", function() {
    bTree.addValue(7);
    bTree.addValue(6);
    bTree.addValue(5);
    expect(bTree.children.length).toEqual(2);
    expect(bTree.values[0]).toEqual(6);
    expect(bTree.children[0].values[0]).toEqual(5);
    expect(bTree.children[1].values[0]).toEqual(7);

    bTree = new BTree();
    bTree.addValue(5);
    bTree.addValue(6);
    bTree.addValue(7);
    expect(bTree.children.length).toEqual(2);
    expect(bTree.values[0]).toEqual(6);
    expect(bTree.children[0].values[0]).toEqual(5);
    expect(bTree.children[1].values[0]).toEqual(7);

    bTree = new BTree();
    bTree.addValue(5);
    bTree.addValue(7);
    bTree.addValue(6);
    expect(bTree.children.length).toEqual(2);
    expect(bTree.values[0]).toEqual(6);
    expect(bTree.children[0].values[0]).toEqual(5);
    expect(bTree.children[1].values[0]).toEqual(7);
  });

  it("should ALWAYS trickle number down until it finds the bottom of the tree", function() {
    bTree.addValue(5);
    bTree.addValue(6);
    bTree.addValue(7);
    bTree.addValue(8);
    expect(bTree.children[1].values).toEqual([7,8]);
  });

});