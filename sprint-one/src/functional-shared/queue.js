var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[counter] = value;
    counter++;
    return storage;
  };

  instance.dequeue = function(){
    var first = storage[0];
    for (var key in storage){
      storage[key - 1] = storage[key];
    }
    delete storage[counter];
    counter--;
    return first;
  };

  instance.size = function(){
    if(counter < 0){
      counter = 0;
      return counter;
    } else {
      return counter;
    }
  };

  return instance;
};

var queueMethods = {};
