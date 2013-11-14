var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0;
  // Implement the methods below
};

Queue.prototype = {
  constructor: Queue,
  enqueue: function(value){
    this.storage[this.length] = value;
    this.length++;
    return this.storage;
  },

  dequeue: function (){
    var first = this.storage[0];
    for (var key in this.storage){
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.length];
    this.length--;
    return first;
  },

  size: function (){
    if(this.length < 0){
      this.length = 0;
      return this.length;
    } else {
      return this.length;
    }
  }
};