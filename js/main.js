$(function() {
  "use strict";
  var winH = $(window).height(),
    navH = $(".navbar").innerHeight();
  $(".slider,.carousel-item").height(winH * 1.15 - navH);
});
