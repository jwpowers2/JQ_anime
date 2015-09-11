$(document).ready(function(){
  $("#btn1").click(function(){
    $('html, body').animate({
      scrollTop: $("#Objective").offset().top
    }, 1000);
  });
  $("#btn2").click(function(){
    $('html, body').animate({
      scrollTop: $("#Skills").offset().top
    }, 1000);
  });
  $("#btn3").click(function(){
    $('html, body').animate({
      scrollTop: $("#Certifications").offset().top
    }, 1000);
  });
  $("#btn4").click(function(){
    $('html, body').animate({
      scrollTop: $("#Experience").offset().top
    }, 1000);
  });
  $("#btn5").click(function(){
    $('html, body').animate({
      scrollTop: $("#next").offset().top
    }, 1000);
  });
});