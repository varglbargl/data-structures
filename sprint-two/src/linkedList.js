// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (val){
    var node = makeNode(val);
    if (list.tail){
      list.tail.next = node;
    }
    if (list.head === null){
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function (){
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function (val, spotToCheck){
    var check = spotToCheck || list.head;
    if (val === check.value){
      return true;
    }
    if(check.next){
      return list.contains(val,check.next);
    }
    return false;
  };

  list.addToHead = function (val){
    var node = makeNode(val);
    node.next = list.head;
    list.head = node;
  };

  list.removeTail = function (checkNode){
    var node = checkNode || list.head;
      if (node.next){
      if (node.next.next !== null){
        list.removeTail(node.next);
      }else{
        node.next = null;
        list.tail = node;
      }
    }else{
      list.tail=null;
      list.head=null;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
