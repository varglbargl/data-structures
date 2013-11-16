describe("hashTable", function() {
  var hashTable;
  var v1="test",v2=50,v3=80,v4="hannah";

  beforeEach(function() {
    hashTable = new HashTable();
      });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    hashTable.insert(v1, v2);
    hashTable.insert(v3, v4);
    expect(hashTable.retrieve(v1)).toEqual(v2);
    expect(hashTable.retrieve(v3)).toEqual(v4);
  });

  it("should remove values", function(){
    hashTable.insert(v2, v2);
    hashTable.insert(v1, v1);
    hashTable.remove(v2);
    expect(hashTable.retrieve(v2)).toEqual(false);
    hashTable.remove(v1);
    expect(hashTable.retrieve(v1)).toEqual(false);
  });
  it("should keep a count of values in the hashtable", function(){
    hashTable.insert(v2, v2);
    hashTable.insert(v1, v3);
    hashTable.insert(v2, v4);
    hashTable.insert(v4, v1);
    hashTable.retrieve(v2);
    expect(hashTable.getCount()).toEqual(3);
    hashTable.remove(v4);
    expect(hashTable.getCount()).toEqual(2);
  });
  it("should keep a count of values in the hashtable", function(){
    hashTable.insert(v2, v2);
    hashTable.insert(v1, v3);
    hashTable.insert("foo", v4);
    hashTable.insert(v4, v1);
    hashTable.insert("bar", v2);
    hashTable.insert("bat", v3);
    hashTable.insert("apple", v4);
    hashTable.insert(v3, v1);
    expect(hashTable.getCount()).toEqual(8);
  });

  // add more tests!
});
