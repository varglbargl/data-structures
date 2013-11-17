var BinarySearchTree = function(val){
  this.left = null;
  this.right = null;
  this.value = val;
};
BinarySearchTree.prototype.insert = function(val,maxAndMin){
  var node = new BinarySearchTree(val);
  var maxAndMin = maxAndMin || this.maxMinHeight();
  if (maxAndMin[0] > maxAndMin[1] * 2){
    //this.rebalance();
  }
  if(this.value < val){
    if(!this.right) {
      this.right = node;
    }else{
      this.right.insert(val,true);
    }
  }
  if(this.value > val){
    if(!this.left) {
      this.left = node;
    }else{
      this.left.insert(val,true);
    }
  }
};


BinarySearchTree.prototype.maxMinHeight = function(node){
  var node = node || this;
  var max;
  var min;
  var leftHeight = [0,0] , rightHeight = [0,0];
  if (node.left){
    leftHeight = this.maxMinHeight(node.left);
  }
  if (node.right){
    rightHeight = this.maxMinHeight(node.right);
  }
  if (rightHeight[0] > leftHeight[0]){
    max = rightHeight[0] + 1;
  } else {
    max = leftHeight[0] + 1;
  }
  if (rightHeight[1] < leftHeight[1]){
    min = rightHeight[1] + 1;
  } else {
    min = leftHeight[1] + 1;
  }
  return [max,min];
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

BinarySearchTree.prototype.chunk = function(array){
  var chunkedArray = [];
  chunkedArray.push(array.splice(0,Math.ceil(array.length/2)),array);
  return chunkedArray;
};

BinarySearchTree.prototype.rebalance = function(chunkOfNodes,newTree){
  if (chunkOfNodes === undefined){
    var twoChunks = this.chunk(this.sort());
    var newTree = new BinarySearchTree(twoChunks[0].pop().value);
  } else if(chunkOfNodes.length === 0){
    return;
  }
  var twoChunks = twoChunks || this.chunk(chunkOfNodes);
  newTree.insert(twoChunks[0].pop().value);
  newTree.rebalance(twoChunks[0],newTree);
  if (twoChunks[1] !== undefined){
    newTree.rebalance(twoChunks[1],newTree);
  }
  if (chunkOfNodes === undefined){
    this.left = newTree.left;
    this.right = newTree.right;
    this.value = newTree.value;
  }
};
