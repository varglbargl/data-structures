var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    storage[size] = value;
    size++;
    //return storage;
  };

  instance.pop = function(){
    var last = storage[size-1];
    delete storage[size];
    if(size !== 0){
      size--;
    }
    return last;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
