var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  instance.dequeue = function(){
    var first = storage[0];
    for (var keys in storage){
      
    }
    delete storage[counter];
    counter--;
    return first;
  };

  instance.size = function(){
    return counter;
  };

  return instance;
};
