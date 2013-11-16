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
    this.right.depthFirstLog(func);
    // return func(this.right.value);
  }
  if (this.left){
    this.left.depthFirstLog(func);
    // return func(this.left.value);
  }
  return func(this.value);
};
BinarySearchTree.prototype.breadthFirstLog = function(func,nodesBelow,currentNode,nodesToRight,farLeft){
  debugger;
  if (currentNode === null){
    return func();
  }
  var currentNode = currentNode || this;
  func(currentNode.value);
  if (farLeft === undefined || farLeft === null || currentNode === farLeft){
    if(currentNode.left){
      var farLeft = currentNode.left;
    } else{
      var farLeft = currentNode.right;
    }
  }
  var nodesBelow = nodesBelow || [];
  if (currentNode.left && currentNode.right){
    nodesBelow.push(currentNode.left, currentNode.right);
  } else if (currentNode.left){
    nodesBelow.push(currentNode.left);
  } else if (currentNode.right){
    nodesBelow.push(currentNode.right);
  }
  if (nodesToRight && nodesToRight.length !== 0){
    currentNode = nodesToRight.shift();
    this.breadthFirstLog(func,nodesBelow,currentNode,nodesToRight,farLeft);
  } else{
    nodesBelow.shift();
    this.breadthFirstLog(func,null,farLeft,nodesBelow,farLeft);
  }
  // recurse right, passing current node, far left and nodesToRight.unshift to the node to the right.
  //then if nodesToRight is empty array, recurse to far left, pass nodesBelow as nodesToRight.

};