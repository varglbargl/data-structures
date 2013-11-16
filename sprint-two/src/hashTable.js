var HashTable = function(){
  this._limit = 8;
  this._count = 0;

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
  if (this._count > this._limit*0.75){
    this.resize(2);
  }
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var overWrote = false;
  var existing = this._storage.get(hash);
  if (Array.isArray(existing)){
    for (var j=0;j<existing.length;j++){
      if (existing[j][0] === k){
        existing[j]=[k,v];
        overWrote = true;
      }
    }
    if (overWrote === false){
      existing.push([k,v]);
      this._count++;
    }
    console.log(existing);
    this._storage.set(hash, existing);
  }else{
    this._storage.set(hash, [[k,v]]);
    this._count++;
  }

};
HashTable.prototype.resize = function(multiplier){
  var allTuples=[];
  this._count = 0;
  this._limit = this._limit * multiplier;
  this._storage.each(function(bucket){
    if (bucket !== undefined){
      for(var i=0 ; i < bucket.length ; i++){
        allTuples.push(bucket[i]);
      }
    }
  });
  this._storage = makeLimitedArray(this._limit);
  for(var i=0 ; i < allTuples.length ; i++){
    this.insert(allTuples[i][0], allTuples[i][1]);
  }
};
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if (Array.isArray(result)){
    for (var j = 0 ; j < result.length ; j++){
      if (result[j][0] === k){
        return result[j][1];
      }
    }
  }
  return false;
};
HashTable.prototype.getCount = function(){
  return this._count;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if(Array.isArray(result)){
    if ( typeof result[1] === "undefined"){
      this._storage.set(i,undefined);
      this._count--;
    }else{
      for (var j = 0 ; j < result.length ; j++){
        if (result[j][0] === k){
          result.splice(result[j],1);
          this._storage.set(i,result);
          this._count--;
        }
      }
    }
    if (this._count < this._limit*0.25){
      debugger;
      this.resize(0.5);
    }
  }else {
    return false;
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
