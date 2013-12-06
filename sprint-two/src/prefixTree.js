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
      wordlist[i] = wordlist[i];
      this.makeNode(wordlist[i]);
    }
    // ya that's literally it.
  },

  lookup: function (word) {
    word = word.toUpperCase();
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
            return;
          }
        }
      }
    };

    var climbTree = function (node) {
      if( !node ){
        return;
      }
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
  },

  lookupByNumber: function (number) {
    number = number.toString() || "0"
    var results = [];
    var starts = [];
    var words = [];

    if( number.indexOf("1") !== -1 || number.indexOf("0") !== -1 ){
      return ["Stop, just stop...\nThat's stupid.\nYou're stupid.\nThere's no letters on 1 or 0."]
    }

    var phoneDigitsToLetters = {
      2: 'ABC',
      3: 'DEF',
      4: 'GHI',
      5: 'JKL',
      6: 'MNO',
      7: 'PQRS',
      8: 'TUV',
      9: 'WXYZ'
    };

    (function numberCheck (wordSoFar, depth) {
      if(depth === number.length){
        words.push(wordSoFar);
        return;
      }
      for( var i = 0; i < phoneDigitsToLetters[number[depth]].length; i++ ){
        if (wordSoFar.length > depth){
          wordSoFar = wordSoFar.slice(0, wordSoFar.length-1);
        }
        wordSoFar += phoneDigitsToLetters[number[depth]][i];
        numberCheck(wordSoFar, depth + 1)
      }
    })("", 0);

    var findStarts = function (string, node) {
      if(!node){
        return;
      }
      var subString = string.slice( 0, node.depth+1 );
      if( node.depth === string.length ){
        starts.push(node);
      } else {
        for( var i = 0; i < node.children.length; i++ ){
          if( node.children[i].value === subString ){
            findStarts(string, node.children[i]);
            return;
          }
        }
      }
    };

    for (var i = 0; i < words.length; i++) {
      findStarts(words[i], this);
    };

    var climbTree = function (node) {
      if( !node ){
        return;
      }
      for( var i = 0; i < node.children.length; i++ ){
        if( node.children[i].isWord ){
          results.push(node.children[i].value);
        }
        if( node.children[i].children.length !== 0 ){
          climbTree(node.children[i]);
        }
      }
    };

    for (var i = 0; i < starts.length; i++) {
      climbTree(starts[i]);
    };

    return results;
  }
};


















