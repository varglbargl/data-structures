var BTree = function () {
  this.parent = null;
  this.values = [];
  this.children = [];
}

BTree.prototype = {
  addValue: function (number) {
    if( this.values.length < 2 ){
      if( this.values.length === 1 ){
        if( number > this.values[0] ){
          this.values.push(number);
        } else if( number < this.values[0] ){
          this.values.unshift(number);
        } else {
          return; // no duplicates allowed!
        }
      } else {
        this.values.push(number);
      }
    } else {
      if( this.parent ){}
    }
    // if both values are full
      // if current node has a parent
        // take middle value, bubble it up to parent and try to insert
      // if current node has no parent
        // make node with value of number (B)
        // split current node's values into seperate nodes with one value each (A,C)
        // set those new nodes (A and C) as children of the number's node (B)
          // maybe that's why it's called a B-Tree?
          // I don't know how each node gets 3 children with this method but we'll see...
            // I think it might just sort of happen by itself (???)
  },

  lookup: function () {
    
  }
};