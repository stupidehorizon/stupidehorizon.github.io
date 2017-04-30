$(document).ready(function() {
  var url = 'https://en.wikipedia.org/w/api.php?callback=?';
  $(".search").click(function() {
    $(".content").empty();
    var searchtext = $(".inp").val();
    $(".inp").val("");
    $.getJSON(url, {
      dtype: 'json',
      search: searchtext,
      format: 'json',
      action: 'opensearch',
    }, function(data) {
      console.log(data);
      //for(var i=0;i<10;i++)
      $(".content").append("<h3>你要找的是：" + data[0] + "</h3>");
      for (var i = 0; i < 10; i++) {
        $(".content").append("<h3>" + data[1][i] + ":</h3>");
        $(".content").append("<a target='_blanket' class=" + i + "><p>" + data[2][i] + "</p></a>");
        $("."+i+"").attr("href", data[3][i]);
      
      }
    });
  });
});