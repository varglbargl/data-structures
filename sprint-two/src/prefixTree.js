var simpleWordList = ["soup", "soap", "tarp", "carp", "cart", "car", "a",
  "as", "ass", "assess", "assassin", "assassinate"];

var PrefixTree = function () {
  this.prefix = "";
  this.children = [];
  this.isWord = false;
};

PrefixTreeNodes.prototype = {

  build: function (wordList) {
    // take word list (array) as argument
    // itterate through word list
    // split first letter off as node
    // recurse with remaining letters
    // do not allow duplicate letters in one node's children
  },

  lookup: function (word) {
    // take word (string) as argument
    // follow string down tree to completion
    // iterate down to find all possible paths from that node
    // return possibilities as array.
  },

  testWordiness: function (word) {
    // take a word (string) as an argument
    // trickle word down word list and test end node for isWord

  }

};