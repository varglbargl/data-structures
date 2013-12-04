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
    depth = depth || 0;
    //console.log(depth);
    var node = new PrefixTree();

    this.value = word.slice(0, depth);

    if( depth === word.length ){
      this.isWord = true;
      return this;
    }

    var alreadyFound = -1;
    for( var i = 0; i < this.children.length; i++ ){
      if( this.children[i].value === word.slice( 0, depth+1 ) ){
        alreadyFound = i;
        break;
      }
    }

    if( alreadyFound === -1 ){
      //console.log(this);
      this.children.push( node.makeNode(word, depth+1) );
    } else {
      this.children[alreadyFound].makeNode(word, depth+1);
    }
    //console.log(node);
    return this;
    // take word (string) as argument
    // make new node in the children array of current node

      // ignore duplicate values in children arrays
    // recurse for each letter in word
      // ignore if word is less than 3 letters from top so it doesnt choke on letter 1
  },

  build: function (wordList) {
    // take word list (array) as argument
    // itterate through word list
    for( var i = 0; i < wordList.length; i++ ){
      this.makeNode(wordList[i]);
    }
  },

  lookup: function (word) {
    // take word (string) as argument
    // follow string down tree to completion
    // iterate down from there to find all possible paths from that node
    // add all nodes where isWord === true to an array
    // return array.
  }

};