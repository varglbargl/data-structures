// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    var node = makeNode(val);
    if (list.tail){
      list.tail.next = val;
    }
    list.tail = node;
    if (list.head === null){
      list.head = node;
    }
  };

  list.removeHead = function(){
    var temp = list[list.head];
    var result = list.head;
    delete list[list.head];
    list.head = temp;
    return result;
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
