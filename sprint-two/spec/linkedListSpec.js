describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should link to null if there is no tail", function(){
    linkedList.addToTail(6);
    expect(linkedList["6"]).toEqual(null);
  });

  it("should give head", function () {
    linkedList.addToTail("Scarlet Johansen");
    expect(linkedList.head).toEqual("Scarlet Johansen");
  });
});