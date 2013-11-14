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
    expect(linkedList.tail).toEqual({value:2, next:null});
  });

  it ("should make head's value reference tail when passed 2 nodes", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.head).toEqual({value: 1, next: {value: 2, next: null}});
  });

  it ("should remove the head or else it gets the hose again", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList[1]).toEqual(undefined);
    expect(linkedList.head).toEqual({value: 2, next: null});
  });

  it ("should return the last head when it is removed", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    var result = linkedList.removeHead();
    expect(result).toEqual(1);
  });

  it ("should return true if list contans the passed value and false if it doesn't contain it", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    var shouldBeTrue = linkedList.contains(2);
    var shouldBeFalse = linkedList.contains("gold dubloons");
    expect(shouldBeTrue).toEqual(true);
    expect(shouldBeFalse).toEqual(false);
  });
});