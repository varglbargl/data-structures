var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var node = makeTree();
  node.parent = this;
  node.value = val;
  this.children.push(node);
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
treeMethods.removeFromParent = function(){
  this.parent.children.splice(this.parent.children.indexOf(this),1);
  this.parent = null;
  return this;
};