var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var danmuArr = ["测试","GOOD JOB"];
$(document).ready(function() {
  $(".input-btn").click(function() {
      danmuArr.unshift($(".input-con").val());
      $(".input-con").val("");
      console.log(danmuArr);
      var cla = $("<div></div>");
      cla.text(danmuArr[0]);
      $(".danmu").append(cla);
      action(cla);
    //按键清屏
    $(".clean-btn").click(function(){
      danmuArr = [];
      $(".danmu").empty();
    })
    //随机显示
      setInterval(function() { 
          var cla = $("<div></div>");
          cla.text(danmuArr[Math.floor(Math.random() * danmuArr.length)]);
          $(".danmu").append(cla);
          action(cla);
        } , Math.random() * 5000+1000);
  });

});

function action(cla) {
  var lPosition = $(".danmu").width() + 20 - cla.width();
  var tPosition = 20 + Math.random() * $(".danmu").height();
  cla.css({
    left: lPosition,
    top: tPosition,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
  cla.animate({
    left: -cla.width()
  }, Math.random() * 10000 + 2000, function() {
    cla.remove();
  });
}