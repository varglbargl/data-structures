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
BinarySearchTree.prototype.sort = function(node,sortedNodes){
  var node = node || this;
  var sortedNodes = sortedNodes || [];
  if (node.left){
    this.sort(node.left,sortedNodes);
  }
  sortedNodes.push(node);
  if (node.right){
    this.sort(node.right,sortedNodes);
  }
  return sortedNodes;
};

BinarySearchTree.prototype.chunk = function(array,chunkSize){
  var i,j,chunkedArrays = [],chunk = chunkSize;
  for (i=0,j=array.length; i<j; i+=chunk) {
    chunkedArrays.push(array.slice(i,i+chunk));
  }
  return chunkedArrays;
};

BinarySearchTree.prototype.rebalance = function(chunkOfNodes,notFirstTime){
  if (chunkOfNodes === undefined){
    ///start process 
  } else if(chunkOfNodes.length === 0){
    return;
  }
  var twoChunks = this.chunk(chunkOfNodes,"half");
  this.insert(twoChunks[0].pop().value);
  this.rebalance(twoChunks[0]);
  if (twoChunks[1] !== undefined){
    this.rebalance(twoChunks[1]);
  }
  if (chunkOfNodes === undefined){
    return;
  }
  
};
