var BinarySearchTree = function(val){
  this.left = null;
  this.right = null;
  this.value = val;
};
BinarySearchTree.prototype.insert = function(val){
  var node = new BinarySearchTree(val);
  if(this.value < val){
    if(!this.right) {
      this.right = node;
    }else{
      this.right.insert(val);
    }
  }
  if(this.value > val){
    if(!this.left) {
      this.left = node;
    }else{
      this.left.insert(val);
    }
  }
};
BinarySearchTree.prototype.contains = function(val){
  if (this.value == val){
    return true;
  }
  if (this.right && this.value < val){
    return this.right.contains(val);
  } else if (this.left){
    return this.left.contains(val);
  }
  return false;
};
BinarySearchTree.prototype.depthFirstLog = function(func){
  if (this.right){
    func(this.right.value);
  }
  if (this.left){
    func(this.left.value);
  }
  return func(this.value);
};