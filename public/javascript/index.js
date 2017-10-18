$(document).ready(function(){

$("#space").fadeIn();


$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    window.location.href = "/mainmenu"
  }
})



});
