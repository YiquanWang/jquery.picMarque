/*
picMarque v1.0.0
Author: Spring Wang 
Git: https://github.com/YiquanWang/jquery.picMarque

Copyright 2014 Spring Wang
Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

*/

$.fn.picMarque = function(t) {
  var n = {speed: 60,data:[], errorimg:'http://www.siaa.org.cn/style/common/nophoto.jpg'};
  var r = $.extend(n, t);
  var data = n.data;
  var html = '<table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td id="marqueItem1"><div class="marque-main"><ul>'

  for(var i=0;i<data.length;i++){
    if(i>=5) break;
    html  += '<li><a href="'+data[i].link+'"><img src="'+data[i].image+'" alt="'+data[i].title+'" onerror="this.src=\''+n.errorimg+'\'"></a><div class="splendid-links">'+data[i].title+'</div></li>';
  }
                 
  html  +=  '</ul></div></td><td id="marqueItem2"></td></tr></tbody></table>';

  return $(this).each(function() {
    $(this).append(html).addClass("marque-box");
      var FGDemo = $(this).get(0);
      var FGDemo1 = document.getElementById("marqueItem1");
      var FGDemo2 = document.getElementById("marqueItem2");
      FGDemo2.innerHTML = FGDemo1.innerHTML;
      function Marquee1() {
        if (FGDemo.scrollLeft >= FGDemo1.scrollWidth) {
          FGDemo.scrollLeft = 0;
        } else {
          FGDemo.scrollLeft++;
        }
      }

      var MyMar1 = setInterval(Marquee1, n.speed);
      FGDemo.onmouseover = function () {
        clearInterval(MyMar1);
      }
      FGDemo.onmouseout = function () {
        MyMar1 = setInterval(Marquee1, n.speed);
      } 
  })
}
