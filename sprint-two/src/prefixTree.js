var sampleWordList = ["soup", "soap", "tarp", "carp", "cart", "car", "a",
  "as", "ass", "assess", "assassin", "assassinate", "assassinations"];

var PrefixTree = function () {
  this.value = "";
  this.children = [];
  this.isWord = false;
  this.depth = 0;
};

PrefixTree.prototype = {

  makeNode: function (word, depth) {
    this.depth = depth || 0;
    var node = new PrefixTree();

    this.value = word.slice(0, this.depth);

    if( this.depth === word.length ){
      this.isWord = true;
      return this;
    }

    var alreadyFound = -1;
    for( var i = 0; i < this.children.length; i++ ){
      if( this.children[i].value === word.slice( 0, this.depth+1 ) ){
        alreadyFound = i;
        break;
      }
    }

    if( alreadyFound === -1 ){
      this.children.push( node.makeNode(word, this.depth+1) );
    } else {
      this.children[alreadyFound].makeNode(word, this.depth+1);
    }
    return this;
  },

  build: function (wordList) {
    for( var i = 0; i < wordList.length; i++ ){
      this.makeNode(wordList[i]);
    }
    // ya that's literally it.
  },

  lookup: function (word) {
    var results = [];
    // take word (string) as argument
    var start;

    var climbTree = function (string, depth) {

    };


    // follow string down tree to completion
    // iterate down from there to find all possible paths from that node
    // add all nodes where isWord === true to an array
    // return array.
    return results;
  }

};