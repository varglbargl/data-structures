var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(val){
  if(!this.contains(val)){
    this._storage.push(val);
  }
};

setPrototype.contains = function(val){
  return (this._storage.indexOf(val) !== -1);
};

setPrototype.remove = function(val){
  this._storage.splice(this._storage.indexOf(val),1);
};
  