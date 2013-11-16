var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;
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
  if (this.children.length !== 0){
    for(var i = 0 ; i < this.children.length ; i++){
      if(this.children[i].contains(val)){
         return true;
       }
    }
  }
  return false;
};
treeMethods.removeFromParent = function(){
  this.parent.children.splice(this.parent.children.indexOf(this),1);
  this.parent = null;
  return this;
};

treeMethods.traverse = function(callback){
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
  return callback(this.value);
};