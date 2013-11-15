var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var node = makeTree();
  node.value = val;
  this.children = node;
};

treeMethods.contains = function(){
};