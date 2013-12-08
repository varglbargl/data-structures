var BTree = function () {
  this.parent = null;
  this.values = [];
  this.children = [];
}

BTree.prototype = {
  addValue: function (number) {
    // trickle number down until this.children.length === 0;
    if( this.children.length > 0 ){
      if(this){ // ?????

      }
    }
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
      if( this.parent ){

      } else {
        if( number < this.values[0] ){
          this.children = [new BTree(), new BTree()];
          this.children[0].addValue(number);
          this.children[1].addValue(this.values[1]);
          this.values = [this.values[0]];
        } else if( number > this.values[1] ){
          this.children = [new BTree(), new BTree()];
          this.children[0].addValue(this.values[0]);
          this.children[1].addValue(number);
          this.values = [this.values[1]];

        } else if( number === this.values[0] || number === this.values[1] ){
          return; // i said no duplicates!
        } else {
          this.children = [new BTree(), new BTree()];
          this.children[0].addValue(this.values[0]);
          this.children[1].addValue(this.values[1]);
          this.values = [number];
        }
      }
    }
    // if both values are full
      // if current node has a parent
        // take middle value, bubble it up to parent and try to insert
      // if current node has no parent
        // make node with value of middle number (B)
        // split current node's values into seperate nodes with one value each (A,C)
        // set those new nodes (A and C) as children of the number's node (B)
          // maybe that's why it's called a B-Tree?
          // I don't know how each node gets 3 children with this method but we'll see...
            // I think it might just sort of happen by itself (???)
  },

  lookup: function () {
    
  }
};