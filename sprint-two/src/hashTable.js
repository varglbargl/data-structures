var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collision = {};
  window.collisionTable = {};

  this._storage.each(function(item, key){
    if (key === i && item !== v){
      collision = {existing: {item: item, key: key}, newHash: {unhashed: k, item: v}};
    }
  });
  console.log(i);
  if (collision.existing){
    this._storage.set(collision.existing["key"] + 1, collision.newHash["item"]);
    collisionTable[collision.newHash.unhashed] = collision.existing.key + 1;
  } else {
    this._storage.set(i, v);
  }
};

HashTable.prototype.retrieve = function(k){
  if (collisionTable[k]) {
    return this._storage.get(collisionTable[k]);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
