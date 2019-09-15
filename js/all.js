$(document).ready(function() {
  // $(".bg").css("height", $(window).height() + "px");
  // $(window).resize(function() {
  //   var windowHeight = $(this).height();
  //   $(".bg").css("height", windowHeight + "px");
  // });

  var xhr = new XMLHttpRequest();
  xhr.open(
    "get",
    "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5",
    true
  );
  xhr.send(null);
  xhr.onload = function() {
    $(".show_result").html("");
    var html = "<ul>";
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; i < data.length; i++) {
      html += `<li><div class="show_info"><h2><a href="${data[i].webSales}">${data[i].title}</a></h2>`;
      for (var j = 0; j < data[i].showInfo.length; j++) {
        // time = data[i].showInfo[j].time;
        html += `<div class="date">${data[i].showInfo[j].time}</div><div class="location">${data[i].showInfo[j].location}</div>`;
      }
      html += `<div class="source"">${data[i].sourceWebName}</div></li>`;
    }
    html += "</ul>";
    $(".show_result").append(html);
  };
});
