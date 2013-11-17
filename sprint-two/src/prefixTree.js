var simpleWordList = ["soup", "soap", "tarp", "carp", "cart", "car", "a",
  "as", "ass", "assess", "assassin", "assassinate"];

var PrefixTree = function () {
  this.prefix = "";
  this.children = [];
  this.isWord = false;
  this.distance = 0;
};

PrefixTree.prototype = {

  makeNode: function (word, distance) {
    // take word (string) as argument
    // incriment distance from top of tree
    // make new node in the children array of current node
      // ignore duplicate strings in children arrays
    // recurse for each letter in word
      // if distance is the same as word.length, set isWord to true
        // and return
      // ignore if word is less than 3 letters from top
  },

  build: function (wordList) {
    // take word list (array) as argument
    // itterate through word list
    for (var i = 0; i < wordList.length; i++) {
      this.makeNode(wordList[i]);
    }
  },

  lookup: function (word) {
    // take word (string) as argument
    // follow string down tree to completion
    // iterate down to find all possible paths from that node
    // return possibilities as array.
  },

  testWordiness: function (word) {
    // take a word (string) as an argument
    // trickle word down tree to completion
    // return that node's isWord value
  }

};