$(document).ready(function () {
  var prefixTree = new PrefixTree();
  prefixTree.build(longWordlist);

  $(".word").keyup(function () {
    var input = $(".word").val();
    // console.log(input);
    if(input.length > 0){
      var words = prefixTree.lookup( input );
      var list = words.join("</h3><h3>")
      $(".output").html("<h3>" + list + "</h3>");
    } else {
      $(".output").html("");
    }
  });
});