$(document).ready(function(){
  var audio = new Audio('song.mp3');


audio.play();

$("#game").click(function(){
  window.location.href ="/game";




});


$("#topten").click(function(){
  window.location.href ="/topten";



});

// music

// function checkSound() {
//
//     var currentSound = sessionStorage.getItem('soundStatus');
//
//     console.log(currentSound);
//     if (currentSound == "true") {
//         // start music
//         audio.play();
//     } else {
//         // Stop the music
//         audio.pause();
//     }
//
// }

// function toggleSound() {
//     var currentSound = sessionStorage.getItem('soundStatus');
//     if(currentSound == "true") {
//         currentSound = "false";
//     }
//     else {
//         currentSound = "true";
//     }
//     console.log(currentSound);
//     sessionStorage.setItem('soundStatus', currentSound)
//
//     var myElement = document.getElementById("soundMenuItem");
//     myElement.innerHTML = "Turn Sound " + (currentSound ? "Off" : "On &nbsp;&nbsp;");
//
//     //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
//     checkSound();
//
// }


});
