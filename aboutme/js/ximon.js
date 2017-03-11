var offColor = ["#00a74a", "#094a8f", "#cca707", "#9f0f17"];
var onColor = ["#08fc74", "#1181f8", "#fccf0d", "#f61925"];

function reset() {
  lightArr = [];
  turnOn = false;
  start = false;
  step = 0;
  clickAble = false;
  peopleClick = 0;
  stratic=false;
}

$(document).ready(function() {
  reset();
  $(".switch-btn").click(
    function() {
      turnOn = !turnOn;
      if (!turnOn){
        $(".count").text("")
        reset();
        $(this).animate({
          left: '-61px'
        }, 100);
      }
      else{
        $(".count").text("--")
        $(this).animate({
          left: '-79px'
        }, 100);
      }
        //console.log(turnOn);
    });
  $(".stratic-btn").click(function(){
    stratic=!stratic;
    if(stratic){
      $(".led").css("background-color","#f92f2f");
    }else
      $(".led").css("background-color","#8c1a1a")
  })
  console.log(turnOn);

    $(".start-btn").click(function() {
      if (turnOn){
     // reset();
      creatCount(step);
      $(".count").text(lightArr.length - 1);
      }
    });
    $("#0,#1,#2,#3").click(function() {
      if (clickAble) {
        //  console.log(lightArr);
        clickAndJduge(peopleClick, this, lightArr);
      }
    });
});

function creatCount(i) {
  i = i + 1; //步数大于数组长度时 产生一个随机值0~3push进数组
  console.log("step=" + i);
  if (i > lightArr.length)
    lightArr.push(Math.floor(Math.random() * 4));
  //console.log(lightArr);
  lightOn(0, lightArr);
}

function lightOn(j, arr) { //亮起并熄灭函数
  if (j < arr.length) {
    // console.log(arr);
    clickAble = false;
    //console.log(j);
    var light = setTimeout(function() {
      $('#' + arr[j] + '').css('background-color', onColor[arr[j]]); //onColor的值和ID联动     clearTimeout(light);
      var changeColorBack = setTimeout(function() {
        $('#' + arr[j] + '').css('background-color', offColor[arr[j]]);
        clearTimeout(changeColorBack);
        lightOn(j + 1, arr);
      }, 1000);
    }, 1000);

  } else {
    clickAble = true;
  }
  // console.log("s");
}

function clickAndJduge(num, thi, arr) {
  if (peopleClick == 20)
    alert("GOOD JOB! YOU WIN!"); //判断用户每次点击是否等于lightArr相应位置的值
  clickAble = false;
  value = $(thi).attr("id");
  console.log("lightArr=");
  console.log(arr);
  $(thi).css('background-color', onColor[value]);
  var changeColorBack = setTimeout(function() {
    $('#' + value + '').css('background-color', offColor[value]);
    // console.log("success");
    clearTimeout(changeColorBack);
  }, 1000);
  if (value == arr[num]) {
    if (num === arr.length - 1) {
      clickAble = false;
      num = 0;
      console.log("creatCount" + arr.length);
      peopleClick = 0;
      var delay = setTimeout(function() {
        creatCount(arr.length);
        $(".count").text(arr.length - 1);
        clearTimeout(delay);
      }, 1000);

    } else {
      num = num + 1;
      clickAble = true;
      console.log("继续点击");
      peopleClick++;
      //  clickAndJduge(num + 1, thi, arr);
    }
  } else {
    if(stratic){
     reset();
     creatCount(0);
     $(".count").text(0);
    console.log("重新开始");
    }else{
      peopleClick = 0;
      creatCount(arr.length-1);
    }
  }
}