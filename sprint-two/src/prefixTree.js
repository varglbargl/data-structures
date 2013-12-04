var sampleWordlist = ["soup", "soap", "tarp", "carp", "cart", "car", "a",
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

  build: function (wordlist) {
    for( var i = 0; i < wordlist.length; i++ ){
      wordlist[i] = wordlist[i].toLowerCase();
      this.makeNode(wordlist[i]);
    }
    // ya that's literally it.
  },

  lookup: function (word) {
    word = word.toLowerCase();
    var results = [];
    var start;

    var findStart = function (string, node) {
      var subString = string.slice( 0, node.depth+1 );
      if( node.depth === string.length ){
        start = node;
      } else {
        for( var i = 0; i < node.children.length; i++ ){
          if( node.children[i].value === subString ){
            findStart(string, node.children[i]);
            break;
          }
        }
      }
    };

    var climbTree = function (node) {
      for( var i = 0; i < node.children.length; i++ ){
        if( node.children[i].isWord ){
          results.push(node.children[i].value);
        }
        if( node.children[i].children.length !== 0 ){
          climbTree(node.children[i]);
        }
      }
    };

    findStart(word, this);

    climbTree(start);

    return results;
  }

};