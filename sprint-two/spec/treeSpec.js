describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should should have children", function() {
    expect(tree.children).toEqual([]);
  });

  it("should add children that are new trees with values", function(){
    tree.addChild("baby");
    var testSeed = makeTree();
    testSeed.value = "baby";
    expect(tree.children).toEqual(testSeed);
  });

  it("should find if the tree contains the value anywhere", function(){
    tree.addChild(1);
    tree.addChild("flute");
    tree.children[0].addChild(45);
  })
  // Add more tests here to test the functionality of tree.
});