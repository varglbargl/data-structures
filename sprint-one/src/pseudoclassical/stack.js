var Stack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here

  // Implement the methods below
};

Stack.prototype = {
  constructor: Stack,
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    var last = this.storage[this.length-1];
    delete this.storage[this.length];
    if(this.length !== 0){
      this.length--;
    }
    return last;
  },
  size: function(){
    return this.length;
  }
};
