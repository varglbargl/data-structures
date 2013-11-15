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
  this.children.push(node);
  console.log(this.children);
};

treeMethods.contains = function(val){
  //debugger;
  if (this.value === val){
    return true;
  }
  if (this.children != []){
    for(var i = 0 ; i < this.children.length ; i++){
      return this.children[i].contains(val);
    }
  }
  return false;
};