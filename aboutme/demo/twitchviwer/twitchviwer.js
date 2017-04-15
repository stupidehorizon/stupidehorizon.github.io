//写不来的时候都会去看 shuiRong的 CODEPEN 在此特别感谢他 他的codepen地址是 https://freecodecamp.cn/shuiRong/
//这也是我最后一个FCC前端项目了 也感谢自己没有放弃 加油
var names = ['iambunnyb', 'setyl', 'beyondthesummit', 'radpuppy', 'clumsy_lady', 'opiuna', 'kthulluh', 'snipeyyy'];

function getData() {
  names.forEach(function(name) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + name + "?callback=?&client_id=chpgyoxoqpv2uy0xwbfjnpswj5ejctz", function(data) {

      var status;
      if (data.stream === null) {
        status = 'Offline';
      } else if (data.stream === undefined) {
        status = 'Account closed';
      } else {
        status = 'Online';
      }
      if (status == 'Offline') {
        var url = 'https://twitch.tv/' + name;
        var icon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488005244&di=54ea9ade17df860d18a3f09199c9fc97&imgtype=jpg&er=1&src=http%3A%2F%2Fimage82.360doc.com%2FDownloadImg%2F2015%2F02%2F1702%2F50258430_32.jpg';
        var html = "<div class='content-box offline' ><img src='" +
          icon + "' target='_blanket' alt='Icon'><h3><a  href='" +
          url + "'target='_blanket'>" +
          name + "</a></h3><h4>" +
          status + "</h4></div>";
        $(".content").append(html);
      }
     if (status == 'Online') {
        var icon = data.stream.channel.logo;
        var url = data.stream.channel.url;
        var html = "<div class='content-box online' ><img src='" +
          icon + "' target='_blanket' alt='Icon'><h3><a  href='" +
          url + "'target='_blanket'>" +
          name + "</a></h3><h4>" +
          status + "</h4></div>";
        $(".content").append(html);
      }
    });
  });
}
$(document).ready(function() {
  getData();
  $(".online-btn").click(function(){
    $(".offline").hide(); 
    $(".online").show();
  });
  
  $(".offline-btn").click(function(){
    $(".offline").show(); 
    $(".online").hide(); 
  });
  $(".all-btn").click(function(){
    $(".offline").show(); 
    $(".online").show(); 
  });
  
});