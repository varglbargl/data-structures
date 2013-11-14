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
    expect(linkedList.tail).toEqual({value:6,next:null});
  });

  it("should give head", function () {
    linkedList.addToTail("Scarlet Johansen");
    expect(linkedList.head).toEqual({value: "Scarlet Johansen" , next: null});
  });
  it ("should move current tail when adding a new tail", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.tail).toEqual({value:2,next:null});
  });
  it ("should make the last tail point to the new tail when adding a new tail", function(){
    linkedList.addToTail(2);
    linkedList.addToTail(1);
    expect(linkedList.head).toEqual({value: 1, next: 2});
  });
  it ("should remove the head or else it gets the hose again", function(){
    linkedList.addToTail(2);
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList[2]).toEqual(undefined);
    expect(linkedList.head).toEqual(1);
  });
  it ("should return the last head", function(){
    linkedList.addToTail(2);
    linkedList.addToTail(1);
    var result = linkedList.removeHead();
    expect(result).toEqual(2);
  });
});