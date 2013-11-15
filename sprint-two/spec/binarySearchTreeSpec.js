describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  it("should first set its value", function() {
    expect(binarySearchTree.left).toEqual(null);
    expect(binarySearchTree.value).toEqual(5);
  });

  it("should insert new values into left and right branches", function() {
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.value).toEqual(3);
    expect(binarySearchTree.right).toEqual(null);
    binarySearchTree.insert(80);
    expect(binarySearchTree.right.value).toEqual(80);
  });
  it("should contain values", function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(80);
    expect(binarySearchTree.contains(80)).toEqual(true);
    expect(binarySearchTree.contains(33)).toEqual(false);
  });

  it("should accept a callback function to method depthFirstLog", function(){
    var closest = 0;
    var test = 81;
    binarySearchTree.insert(3);
    binarySearchTree.insert(80);
    binarySearchTree.insert(99);
    binarySearchTree.insert(19);
    binarySearchTree.insert(32);
    binarySearchTree.insert(35);
    var nearest = function(val){
      if (Math.abs(test-val) < Math.abs(test-closest)){
        closest=val;
      }
      return closest;
    };
    var result = binarySearchTree.depthFirstLog(nearest);
    expect(result).toEqual(80);
    console.log(binarySearchTree);
  });



});
