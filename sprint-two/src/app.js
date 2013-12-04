$(document).ready(function () {
  var prefixTree = new PrefixTree();
  prefixTree.build(longerWordlist);

  $(".word").keyup(function () {
    var input = $(".word").val();
    console.log(input);
    if(input.length > 2){
      var words = prefixTree.lookup( input );
      var list = words.join("</h3><h3>")
      $(".output").html("<h3>" + list + "</h3>");
    } else {
      $(".output").html("");
    }
  });
});