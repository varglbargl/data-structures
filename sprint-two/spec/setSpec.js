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
});