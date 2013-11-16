describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });
  it("should add strings to the set", function() {
    set.add("hello");
    expect(set._storage[0]).toEqual("hello");
  });
  it("should find strings", function() {
    set.add("wakka wakka");
    expect(set.contains("wakka wakka")).toEqual(true);
  });
  it("should delete strings", function(){
    set.add("testing is boring");
    set.remove("testing is boring");
    expect(set.contains("testing is boring")).toEqual(false);
  });
  it("should not add values if they exist in storage", function(){
    set.add("bla");
    set.add("bla");
    expect(set._storage.length).toEqual(1);
  });
  it("should handle numbers", function(){
    set.add(1);
    set.add(3);
    expect(set._storage.length).toEqual(2);
    expect(set.contains(3)).toEqual(true);
  });
  it("should handle input object of any type", function(){
    var bob = [1,"bob",false,null,undefined];
    set.add({1:"hi","hello":948383});
    set.add(function(){console.log('hello');});
    set.add(bob);
    set.add(bob);
    set.add(undefined);
    set.add(null);
    set.add(undefined);
    set.add(null);
    expect(set._storage.length).toEqual(5);
    expect(set.contains(null)).toEqual(true);
    expect(set.contains(undefined)).toEqual(true);
  });
});