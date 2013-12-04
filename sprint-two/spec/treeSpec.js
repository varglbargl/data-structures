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
    expect(tree.children[0].value).toEqual("baby");
  });

  it("should find if the tree contains the value", function(){
    tree.addChild(1);
    tree.addChild("flute");
    expect(tree.contains(1)).toEqual(true);
  });

  it("should find if the tree contains the value anywhere", function(){
    tree.addChild(1);
    tree.addChild("flute");
    tree.children[0].addChild(45);
    expect(tree.contains(45)).toEqual(true);
    expect(tree.contains(46)).toEqual(false);
  });

  it("should know its parent",function(){
    tree.addChild("baby");
    tree.addChild("flute");
    tree.children[0].addChild(45);
    expect(tree.parent).toEqual(null);
    expect(tree.children[0].parent).toEqual(tree);
    expect(tree.children[0].children[0].parent.value).toEqual("baby");
  });

  it("should not live with its parent when it grows up", function(){
    tree.addChild(1);
    tree.addChild("flute");
    tree.children[0].addChild(45);
    var newTree = tree.children[0].removeFromParent();
    expect(tree.contains("flute")).toEqual(true);
    expect(tree.contains(45)).toEqual(false);
    expect(newTree.parent).toEqual(null);
  });

  it("should call a function on every node of a tree", function(){
    tree.addChild(1);
    tree.addChild("flute");
    tree.children[0].addChild(45);
    tree.children[0].addChild("dog");
    tree.traverse(function(val){
      //console.log(val);
    });
  });
});