$(document).ready(function () {
  var prefixTree = new PrefixTree();
  prefixTree.build(scrabbleWordlist);

  $(".word").keyup(function () {
    var input = $(".word").val();
    // console.log(input);
    if(input.length > 1){
      var words = prefixTree.lookup( input );
      var list = words.join("</h3><h3>")
      $(".output").html("<h3>" + list + "</h3>");
    } else {
      $(".output").html("");
    }
  });

  $(".number").keyup(function () {
    var input = $(".number").val();
    // console.log(input);
    if(input.length > 2){
      var words = prefixTree.lookupByNumber( input );
      var list = words.join("</h3><h3>")
      $(".output2").html("<h3>" + list + "</h3>");
    } else {
      $(".output2").html("");
    }
  });
});